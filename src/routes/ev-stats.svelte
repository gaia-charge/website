<script>
  import { locale, _, isLoading } from "svelte-i18n";
  import { Card, Headline, Loading } from "attractions";
  import { Line, Bar } from 'svelte-chartjs/src/index';
  import Header from "../components/Header.svelte";
  import BaseWrapper from "../components/BaseWrapper.svelte";
  import Footer from "../components/Footer.svelte";
  import NetworkOrderDropdown from "../components/ev-stats/NetworkOrderDropdown.svelte";
  import MaximumPowerChart from "../components/ev-stats/MaximumPowerChart.svelte";
  import SocketTypesChart from "../components/ev-stats/SocketTypesChart.svelte";
  import ChargerStatesChart from "../components/ev-stats/ChargerStatesChart.svelte";
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
          borderRadius: Number.MAX_VALUE,
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
          borderRadius: Number.MAX_VALUE,
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
          borderRadius: Number.MAX_VALUE,
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
        display: false,
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
      y: {
        display: true,
        ticks: {
          autoSkip: false,
          align: 'start',
          crossAlign: 'far',
          minRotation: 90,
          labelOffset: 30,
          font: {
            size: 10
          },
          callback: function (value, index, ticks) {
            const isSmall = window.matchMedia('(max-width: 576px)');
            const label = this.getLabelForValue(value);
            if (!isSmall) return label;
            if (label === 'Fenie Energ\u00eda') return 'Fenie';
            if (label === 'Repsol - IBIL') return 'Repsol';
            if (label === 'Melib Mallorca') return 'Melib';
            if (label === 'Ajuntament Barcelona') return 'Barcelona';
            if (label === 'Municipality of Catalunya') return 'Catalunya';
            if (label === 'El Corte Ingl\u00e9s') return 'C. Ingl\u00e9s';
            if (label === '') return '';
            if (label === '') return '';
            if (label === '') return '';
            if (label === '') return '';
            if (label === '') return '';
            return label;
          }
        }
      },
      x: {
        display: false,
        type: 'linear',
        position: 'top'
      },
      // x2: {
      //   type: 'linear',
      //   position: 'bottom'
      // },
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
            <Card style="padding: 2em 0;">
              <div style="font-size: 4em;">
                <Loading />
              </div>
            </Card>
          {:then data}
            <Card style="margin-bottom: 1.5em; scroll-snap-align: start;">
              <p class="subtitle">
                <strong
                  >{$_("ev-stats.number-of-chargers-over-time", {
                    default: "Number of chargers over time",
                  })}</strong>
              </p>
            </Card>
            <div class="doughnuts">
              <MaximumPowerChart data={data.max_power} />
              <SocketTypesChart data={data.connectors} />
              <ChargerStatesChart data={data.states} />
            </div>
            <Card style="scroll-snap-align: start;">
              <div class="subtitle" style="height: 400vw;">
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
    scroll-snap-type: y mandatory;
  }
  .doughnuts {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
</style>
