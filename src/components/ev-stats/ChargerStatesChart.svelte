<script>
  import DoughnutChartWithLegend from "./DoughnutChartWithLegend.svelte";
  import { chartColors } from "../../utils/charts";

  export let data;

  const parsedData = {
    labels: data.map((r) => r[0]),
    datasets: [
      {
        data: data.map((r) => r[1]),
        backgroundColor: chartColors,
      },
    ],
  };

  parsedData.labels = parsedData.labels.map((label) => {
    if (label === "No working connectors") return "Not working";
    return label;
  });
</script>

<DoughnutChartWithLegend name="charger-states" title="Charger states" data={parsedData} />
