<script>
  import { locale, _ } from "svelte-i18n";
  import { subDays, intlFormat } from "date-fns";
  import { Line } from "@gaia-green-tech/svelte-chartjs/dist/index.cjs";
  import "chart.js/auto/auto.js";
  import { chartColors, formatPower } from "../../utils/charts";

  export let data;
  const isSmallScreen = window.matchMedia("(max-width: 576px)").matches;

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        ticks: {
          callback: function (value, index, ticks) {
            if (index % 2 === 0) return this.getLabelForValue(value);
            return "";
          },
        },
      },
      power: {
        display: false,
        type: "linear",
        position: "left",
      },
      chargers: {
        type: "linear",
        position: "right",
        ticks: {
          callback: function (value) {
            if (!isSmallScreen) return this.getLabelForValue(value);
            return `${(value / 1000).toFixed(1)}k`;
          },
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    interaction: {
      intersect: false,
      axis: "xy",
      mode: "index",
    },
  };

  const dateLabels = [new Date()];
  for (let i = 0; i < 29; i++) {
    dateLabels.push(subDays(dateLabels[i], 1));
  }

  const parsedData = {
    labels: dateLabels.reverse().map((d) =>
      intlFormat(
        d,
        {
          month: "short",
          day: "numeric",
        },
        {
          locale: $locale,
        }
      )
    ),
    datasets: [
      {
        label: $_("ev-stats.number-of-chargers", {
          default: "Number of chargers",
        }),
        data: data.map((p) => p[0]),
        backgroundColor: chartColors[0],
        borderColor: chartColors[0],
        yAxisID: "chargers",
      },
      {
        label: $_("ev-stats.total-power"),
        data: data.map((p) => p[1]),
        backgroundColor: chartColors[2],
        borderColor: chartColors[2],
        yAxisID: "power",
        tooltip: {
          callbacks: {
            label: (item, a, b) =>
              `${$_("ev-stats.total-power", {
                default: "Total power",
              })}: ${formatPower(item.raw)}`,
          },
        },
      },
    ],
  };
</script>

<Line data={parsedData} options={chartOptions} height="100" />
