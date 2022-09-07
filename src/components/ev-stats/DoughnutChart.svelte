<script>
  import { Doughnut } from "@gaia-green-tech/svelte-chartjs/dist/index.cjs";
  import 'chart.js/auto/auto.js';

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
