<script>
  import { _ } from "svelte-i18n";
  import { Card } from "attractions";
  import DoughnutChart from "./DoughnutChart.svelte";

  export let name;
  export let title;
  export let data;
  export let legendColumns = 2;
  const total = data.datasets[0].data.reduce(
    (previous, current) => previous + current,
    0
  );
  const zipped = data.labels.map((label, i) => {
    return {
      label,
      value: data.datasets[0].data[i],
      percent: (data.datasets[0].data[i] / total) * 100,
    };
  });
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
  const pieColors = [
    "#4C8C40",
    "#F9B233",
    "#9E2B2B",
    "#548080",
    "#89C47E",
    "#C0EFEC",
    "#214EA3",
    "#7A5DB0",
    "#7CA9FC",
    "#CFF783",
    "#84F5F5",
  ];
</script>

<div class="card">
  <Card style="height: 100%;">
    <p class="subtitle">
      <strong
        >{$_(`ev-stats.${name}`, {
          default: title,
        })}</strong
      >
    </p>
    <div class="content">
      <div class="chart">
        <DoughnutChart {data} />
      </div>
      <div class="legend">
        {#each zipped as { label, percent }, i}
          <span
            class="item"
            style:width={`calc(${100 / legendColumns}% - 5px)`}
          >
            <span class="label" style:background-color={pieColors[i]}>
              {label}
            </span>
            <span
              >{percent > 1 ? Math.round(percent) : percent.toFixed(1)}%</span
            >
          </span>
        {/each}
      </div>
    </div>
  </Card>
</div>

<style>
  .card {
    width: 100%;
    margin-bottom: 1.5em;
    scroll-snap-align: start;
  }
  .legend {
    display: flex;
    flex-wrap: wrap;
    font-size: 0.6em;
    margin-top: 1em;
    justify-content: space-between;
  }
  .item {
    display: flex;
    align-items: center;
    padding: 0.25em 0;
    justify-content: space-between;
  }
  .label {
    border-radius: 1em;
    padding: 0.25em 0.5em;
    color: white;
    margin: 0 0.5em;
    text-align: center;
  }

  /* iPad vertical */
  @media only screen and (min-width: 576px) {
    .card {
      width: 100%;
      scroll-snap-align: start;
    }
    .content {
      display: flex;
    }
    .chart {
      width: 50%;
    }
    .legend {
      margin-left: 1em;
      font-size: 0.8em;
      align-content: center;
    }
  }

  /* Desktop / iPad horizontal */
  @media only screen and (min-width: 992px) {
    .card {
      width: calc(100% / 3 - 1em);
    }
    .content {
      flex-wrap: wrap;
    }
    .chart {
      width: 100%;
    }
    .legend {
      margin-left: 0;
      font-size: 0.6em;
    }
  }
</style>
