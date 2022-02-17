<script>
  import { Doughnut } from "svelte-chartjs/src/index";

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
