<script>
  import DoughnutChartWithLegend from "./DoughnutChartWithLegend.svelte";

  export let data;

  data.labels = data.labels.map((label) => {
    if (label === 'Tesla Destination Charger') return 'Tesla Destination';
    if (label === 'Type 1 (SAE J1772)') return 'Type 1';
    return label;
  });
</script>

<DoughnutChartWithLegend
  name="socket-types"
  title="Socket types"
  data={data} />