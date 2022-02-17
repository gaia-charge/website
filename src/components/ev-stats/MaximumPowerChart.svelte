<script>
  import { _ } from "svelte-i18n";
  import DoughnutChartWithLegend from "./DoughnutChartWithLegend.svelte";
  import { chartColors, formatPower } from "../../utils/charts";

  export let data;

  const labelMapping = {
    "350kW": "ultra-rapid.svg",
    "150kW": "ultra-rapid.svg",
    "100kW": "rapid.svg",
    "60kW": "rapid.svg",
    "50kW": "rapid.svg",
    "22kW": "fast.svg",
    "11kW": "fast.svg",
    "7.4kW": "medium.svg",
    "3.7kW": "slow.svg",
    "2.3kW": "slow.svg",
    Other: "",
  };

  const parsedData = {
    labels: data.map((r) => {
      if (r[0] === "Other") return $_("ev-stats.other", { default: "Other" });;
      return `${formatPower(r[0])}`;
    }),
    datasets: [
      {
        data: data.map((r) => r[1]),
        backgroundColor: chartColors,
      },
    ],
  };
</script>

<DoughnutChartWithLegend
  name="maximum-power"
  title={$_("ev-stats.maximum-power", { default: "Maximum power" })}
  legendColumns={2}
  data={parsedData}
/>
