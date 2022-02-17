<script>
  import { locale } from "svelte-i18n";
  import { subDays, intlFormat } from "date-fns";
  import { Line } from "svelte-chartjs/src/index";
  import { chartColors, formatPower } from "../../utils/charts";

  export let data;

  const chartOptions = {
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
        display: false,
        type: "linear",
        position: "right",
      },
    },
    plugins: {
      legend: {
        display: false,
      },
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
        label: "Number of chargers",
        data: data.map((p) => p[0]),
        backgroundColor: chartColors[0],
        borderColor: chartColors[0],
        yAxisID: "chargers",
      },
      {
        label: "Total power",
        data: data.map((p) => p[1]),
        backgroundColor: chartColors[2],
        borderColor: chartColors[2],
        yAxisID: "power",
        tooltip: {
          callbacks: {
            label: (item) => `${formatPower(item.raw)}`,
          },
        },
      },
    ],
  };
</script>

<Line data={parsedData} options={chartOptions} />
