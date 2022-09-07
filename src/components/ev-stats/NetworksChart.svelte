<script>
  import { _ } from "svelte-i18n";
  import { Bar } from "svelte-chartjs";
  import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, LinearScale, PointElement, CategoryScale } from 'chart.js';
  ChartJS.register(Title, Tooltip, Legend, LineElement, LinearScale, PointElement, CategoryScale);
  import {
    chartColors,
    sanitizeNetworkNames,
    formatPower,
  } from "../../utils/charts";

  export let data;
  export let orderNetworksBy;

  function labelCallback(value) {
    const isSmall = window.matchMedia("(max-width: 576px)");
    const label = this.getLabelForValue(value);
    if (!isSmall) return label;
    if (label === "Fenie Energ\u00eda") return "Fenie";
    if (label === "Repsol - IBIL") return "Repsol";
    if (label === "Melib Mallorca") return "Melib";
    if (label === "Ajuntament Barcelona") return "Barcelona";
    if (label === "Municipality of Catalunya") return "Catalunya";
    if (label === "El Corte Ingl\u00e9s") return "C. Ingl\u00e9s";
    if (label === "Volkswagen Group Charging GmbH") return "Volkswagen";
    if (label === "IONITY GmbH") return "Ionity";
    if (label === "Dr. Ing. h.c. F. Porsche AG") return "Porsche";
    if (label === "IBIL Gestor de Carga de VE S.A.") return "IBIL";
    if (label === "Other") return $_("ev-stats.other", { default: "Other" });
    return label;
  }

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    indexAxis: "y",
    scales: {
      y: {
        display: true,
        ticks: {
          autoSkip: false,
          align: "start",
          crossAlign: "far",
          minRotation: 90,
          labelOffset: 30,
          font: {
            size: 10,
          },
          callback: labelCallback,
        },
      },
      locations: {
        display: orderNetworksBy === "locations",
        type: "linear",
        position: "top",
      },
      connectors: {
        display: orderNetworksBy === "connectors",
        type: "linear",
        position: "top",
      },
      power: {
        display: orderNetworksBy === "total-power",
        type: "linear",
        position: "top",
        ticks: {
          callback: function (value) {
            return formatPower(value);
          },
        },
      },
    },
    interaction: {
      intersect: false,
      axis: "xy",
      mode: "index",
    },
  };

  const parsedData = {
    labels: data.map((r) => {
      const label = sanitizeNetworkNames(r[0]);
      if (label === "Other") return $_("ev-stats.other", { default: "Other" });
      return label;
    }),
    datasets: [
      {
        label: $_("ev-stats.locations", { default: "Locations" }),
        data: data.map((r) => r[1].locations),
        backgroundColor: chartColors[0],
        borderRadius: Number.MAX_VALUE,
        xAxisID: "locations",
        tooltip: {
          callbacks: {
            label: (item) =>
              `${item.raw} ${$_("ev-stats.locations").toLowerCase()}`,
          },
        },
      },
      {
        label: $_("ev-stats.connectors", { default: "Connectors" }),
        data: data.map((r) => r[1].connectors),
        backgroundColor: chartColors[1],
        borderRadius: Number.MAX_VALUE,
        xAxisID: "connectors",
        tooltip: {
          callbacks: {
            label: (item) =>
              `${item.raw} ${$_("ev-stats.connectors").toLowerCase()}`,
          },
        },
      },
      {
        label: $_("ev-stats.total-power", { default: "Total power" }),
        data: data.map((r) => Math.round(r[1].power)),
        backgroundColor: chartColors[2],
        borderRadius: Number.MAX_VALUE,
        xAxisID: "power",
        tooltip: {
          callbacks: {
            label: (item) =>
              `${formatPower(item.raw)} ${$_(
                "ev-stats.total-power"
              ).toLowerCase()}`,
          },
        },
      },
    ],
  };
</script>

<Bar data={parsedData} options={chartOptions} />
