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
    if (label === "Working")
      return $_("ev-stats.working", { default: "Working" });
    if (label === "In use") return $_("ev-stats.in-use", { default: "In use" });
    if (label === "No working connectors")
      return $_("ev-stats.not-working", { default: "Not working" });
    if (label === "Reserved")
      return $_("ev-stats.reserved", { default: "Reserved" });
    if (label === "Unknown")
      return $_("ev-stats.unknown", { default: "Unknown" });
    return label;
  });
</script>

<DoughnutChartWithLegend
  name="charger-states"
  title={$_("ev-stats.charger-states", { default: "Charger states" })}
  data={parsedData}
/>
