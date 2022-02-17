<script>
  import { _ } from "svelte-i18n";
  import { Bar } from "svelte-chartjs/src/index";
  import { chartColors, sanitizeNetworkNames } from "../../utils/charts";

  export let data;

  function labelCallback(value, index, ticks) {
    const isSmall = window.matchMedia("(max-width: 576px)");
    const label = this.getLabelForValue(value);
    if (!isSmall) return label;
    if (label === "Fenie Energ\u00eda") return "Fenie";
    if (label === "Repsol - IBIL") return "Repsol";
    if (label === "Melib Mallorca") return "Melib";
    if (label === "Ajuntament Barcelona") return "Barcelona";
    if (label === "Municipality of Catalunya") return "Catalunya";
    if (label === "El Corte Ingl\u00e9s") return "C. Ingl\u00e9s";
    if (label === "") return "";
    if (label === "") return "";
    if (label === "") return "";
    if (label === "") return "";
    if (label === "") return "";
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
      x: {
        display: false,
        type: "linear",
        position: "top",
      },
      // x2: {
      //   type: 'linear',
      //   position: 'bottom'
      // },
    },
    interaction: {
      intersect: false,
      axis: "xy",
      mode: "index",
    },
  };

  const parsedData = {
    labels: data.map((r) => sanitizeNetworkNames(r[0])),
    datasets: [
      {
        label: $_("ev-stats.locations", { default: "Locations" }),
        data: data.map((r) => r[1].locations),
        backgroundColor: chartColors[0],
        borderRadius: Number.MAX_VALUE,
        xAxisID: "x",
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
        xAxisID: "x",
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
        xAxisID: "x2",
        tooltip: {
          callbacks: {
            label: (item) =>
              `${(item.raw / 1000).toFixed(2)}MW ${$_(
                "ev-stats.total-power"
              ).toLowerCase()}`,
          },
        },
      },
    ],
  };
</script>

<Bar data={parsedData} options={chartOptions} />
