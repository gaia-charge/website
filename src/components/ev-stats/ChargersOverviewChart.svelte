<script>
  import { locale } from "svelte-i18n";
  import { subDays, intlFormat } from "date-fns";
  import { Line } from "svelte-chartjs/src/index";
  import { chartColors } from "../../utils/charts";

  export let data;

  const chartOptions = {
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
          weekday: "short",
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
      },
      {
        label: "Total power",
        data: data.map((p) => p[1]),
        backgroundColor: chartColors[1],
        borderColor: chartColors[1],
      },
    ],
  };
</script>

<Line data={parsedData} options={chartOptions} />
