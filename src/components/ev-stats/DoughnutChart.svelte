<script>
  import { Doughnut } from "svelte-chartjs";

  import {
    Chart as ChartJS,
    Tooltip,
    ArcElement
  } from 'chart.js';

  ChartJS.register(
    Tooltip,
    ArcElement
  );

  export let data;
  export let plugins = undefined;

  const chartOptions = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };
</script>

<Doughnut {data} options={chartOptions} {plugins} />
