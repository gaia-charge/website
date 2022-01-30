<script>
  import DoughnutChartWithLegend from "./DoughnutChartWithLegend.svelte";

  export let data;

  data.labels = data.labels.map((label) => {
    if (label === 'No working connectors') return 'Not working';
    return label;
  });
</script>

<DoughnutChartWithLegend name="charger-states" title="Charger states" data={data} />