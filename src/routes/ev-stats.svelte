<script>
  import { locale, _, isLoading } from "svelte-i18n";
  import { Card, Label, Headline } from "attractions";
  import { Line, Doughnut, Bar } from 'svelte-chartjs/src/index';
  import Header from "../components/Header.svelte";
  import BaseWrapper from "../components/BaseWrapper.svelte";
  import Footer from "../components/Footer.svelte";
import NetworkOrderDropdown from "../components/ev-stats/NetworkOrderDropdown.svelte";

  const formatPower = (power) => {
    const floatPower = parseFloat(power);
    if (floatPower > 7.4) {
      return floatPower.toFixed(0).toString();
    }
    return power;
  }

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
    "#84F5F5"
  ];

  let country = 'es';
  let orderNetworksBy =  'locations';

  const sanitizeNetworkNames = (network) => {
    if (network === 'Alian\u00e7a de Municipis de Catalunya i Institut Catal\u00e0 d\u2019Energia.') {
      return 'Municipality of Catalunya'
    }
    return network;
  }

  const setNetworkOrder = (newOrder) => {
    orderNetworksBy = newOrder;
  }

  const processData = async () => {
    const data = await import('./stats.json');

    const processed = {};
    processed.max_power = {
      labels: data.max_power.map((r) => r[0] === 'Other' ? r[0] : `${formatPower(r[0])}kW`),
      datasets: [
        {
          data: data.max_power.map((r) => r[1]),
          backgroundColor: pieColors
        }
      ],
    }

    processed.connectors = {
      labels: data.connectors.map((r) => r[0]),
      datasets: [
        {
          data: data.connectors.map((r) => r[1]),
          backgroundColor: pieColors
        }
      ]
    }

    processed.states = {
      labels: data.states.map((r) => r[0]),
      datasets: [
        {
          data: data.states.map((r) => r[1]),
          backgroundColor: pieColors
        }
      ]
    }

    processed.networks = {
      labels: data.networks.map((r) => sanitizeNetworkNames(r[0])),
      datasets: [
        {
          label: $_("ev-stats.locations", { default: "Locations" }),
          data: data.networks.map((r) => r[1].locations),
          backgroundColor: pieColors[0],
          xAxisID: 'x',
          tooltip: {
            callbacks: {
              label: (item) => `${item.raw} ${$_("ev-stats.locations").toLowerCase()}`
            }
          }
        },
        {
          label: $_("ev-stats.connectors", { default: "Connectors" }),
          data: data.networks.map((r) => r[1].connectors),
          backgroundColor: pieColors[1],
          xAxisID: 'x',
          tooltip: {
            callbacks: {
              label: (item) => `${item.raw} ${$_("ev-stats.connectors").toLowerCase()}`
            }
          }
        },
        {
          label: $_("ev-stats.total-power", { default: "Total power" }),
          data: data.networks.map((r) => Math.round(r[1].power)),
          backgroundColor: pieColors[2],
          xAxisID: 'x2',
          tooltip: {
            callbacks: {
              label: (item) => `${(item.raw / 1000).toFixed(2)}MW ${$_("ev-stats.total-power").toLowerCase()}`
            }
          }
        }
      ]
    }

    return processed;
  }

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        align: 'left',
        labels: {
          usePointStyle: true
        }
      }
    }
  };

  const networkChartOptions = Object.assign({
    indexAxis: 'y',
    scales: {
      x: {
        type: 'linear',
        position: 'top'
      },
      x2: {
        type: 'linear',
        position: 'bottom'
      },
    },
    interaction: {
      intersect: false,
      axis: 'xy',
      mode: 'index',
    },
  }, chartOptions);
</script>

<svelte:head>
  <title
    >{$isLoading ? "" : $_("ev-stats.head", { default: "EV Charging Stats" })} -
    Gaia Green Tech</title
  >
</svelte:head>

{#if !$isLoading}
  <Header whiteBackground={false} activeSection="charging" />

  <BaseWrapper onScroll={() => {}}>
    <div class="content">
      <div class="container">
        <p class="subtitle">
          <strong
            >{$_("ev-stats.subtitle", {
              default: "Gaia Green Tech presents",
            })}</strong
          >
        </p>
        <h2 class="title">
          {$_("ev-stats.title1", { default: "EV Charging Infrastructure" })}<br
          />
          {$_("ev-stats.title2", { default: "Statistics" })}
        </h2>
        <div>
          {#await processData()}
            <Card>
              <Headline>isLoading...</Headline>
            </Card>
          {:then data}    
            <Card style="margin-bottom: 1.5em;">
              <p class="subtitle">
                <strong
                  >{$_("ev-stats.number-of-chargers-over-time", {
                    default: "Number of chargers over time",
                  })}</strong>
              </p>
            </Card>
            <div style="display: flex; justify-content: space-between; margin-bottom: 1.5em; height: 50vw;">
              <Card style="width: calc(100% / 3 - 1em);">
                <p class="subtitle">
                  <strong
                  >{$_("ev-stats.maximum-power", {
                    default: "Maximum power",
                    })}</strong>
                </p>
                <Doughnut data={data.max_power} options={chartOptions} />
              </Card>
              <Card style="width: calc(100% / 3 - 1em);">
                <p class="subtitle">
                  <strong
                    >{$_("ev-stats.socket-types", {
                      default: "Socket types",
                    })}</strong>
                </p>
                <Doughnut data={data.connectors} options={chartOptions} />
              </Card>
              <Card style="width: calc(100% / 3 - 1em);">
                <p class="subtitle">
                  <strong
                    >{$_("ev-stats.charger-states", {
                      default: "Charger states",
                    })}</strong>
                </p>
                <Doughnut data={data.states} options={chartOptions} />
              </Card>
            </div>
            <Card>
              <div class="subtitle" style="height: 100vw;">
                <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1.5em;">
                  <strong
                    >{$_("ev-stats.biggest-charging-networks", {
                      default: "Biggest charging networks",
                    })}
                  </strong>
                  <NetworkOrderDropdown callback={setNetworkOrder} orderNetworksBy={orderNetworksBy} />
                </div>
                <Bar data={data.networks} options={networkChartOptions} />
              </div>
            </Card>
          {/await}
        </div>
      </div>
    </div>
    <Footer />
  </BaseWrapper>
{/if}

<style>
  .content {
    background: linear-gradient(0deg, #daf9f9, #daf9f9);
    min-height: calc(100% - 6.5rem);
    padding-bottom: 4em;
    padding-top: 7em;
  }
</style>
