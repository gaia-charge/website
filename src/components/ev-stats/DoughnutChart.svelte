<script>
  import { Doughnut } from "svelte-chartjs";
  import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, LinearScale, PointElement, CategoryScale } from 'chart.js';
  ChartJS.register(Title, Tooltip, Legend, LineElement, LinearScale, PointElement, CategoryScale);

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
