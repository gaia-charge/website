<script>
  import { _ } from "svelte-i18n";
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
    if (label === "Tesla Destination Charger") return "Tesla Destination";
    if (label === "Type 1 (SAE J1772)") return "Type 1";
    if (label === "Other") return $_("ev-stats.other", { default: "Other" });
    return label;
  });
</script>

<DoughnutChartWithLegend
  name="socket-types"
  title={$_("ev-stats.socket-types", { default: "Socket types" })}
  data={parsedData}
/>
