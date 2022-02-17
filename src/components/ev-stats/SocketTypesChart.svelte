<script>
  import DoughnutChartWithLegend from "./DoughnutChartWithLegend.svelte";
  import { chartColors, formatPower } from "../../utils/charts";

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
    if (label === "Tesla Destination Charger") return "Tesla Destination";
    if (label === "Type 1 (SAE J1772)") return "Type 1";
    return label;
  });
</script>

<DoughnutChartWithLegend
  name="socket-types"
  title="Socket types"
  data={parsedData}
/>
