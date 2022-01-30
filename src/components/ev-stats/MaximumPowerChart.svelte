<script>
  import DoughnutChartWithLegend from "./DoughnutChartWithLegend.svelte";

  export let data;

  const labelMapping = {
    '350kW': 'ultra-rapid.svg',
    '150kW': 'ultra-rapid.svg',
    '100kW': 'rapid.svg',
    '60kW': 'rapid.svg',
    '50kW': 'rapid.svg',
    '22kW': 'fast.svg',
    '11kW': 'fast.svg',
    '7.4kW': 'medium.svg',
    '3.7kW': 'slow.svg',
    '2.3kW': 'slow.svg',
    'Other': ''
  };
</script>

<DoughnutChartWithLegend
  name="maximum-power"
  title="Maximum power"
  legendColumns={2}
  data={data} />