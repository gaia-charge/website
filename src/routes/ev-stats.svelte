<script>
  import { _, isLoading } from "svelte-i18n";
  import { Card, Loading } from "attractions";
  import Header from "../components/Header.svelte";
  import BaseWrapper from "../components/BaseWrapper.svelte";
  import Footer from "../components/Footer.svelte";
  import NetworkOrderDropdown from "../components/ev-stats/NetworkOrderDropdown.svelte";
  import ChargersOverviewChart from "../components/ev-stats/ChargersOverviewChart.svelte";
  import MaximumPowerChart from "../components/ev-stats/MaximumPowerChart.svelte";
  import SocketTypesChart from "../components/ev-stats/SocketTypesChart.svelte";
  import ChargerStatesChart from "../components/ev-stats/ChargerStatesChart.svelte";
  import NetworksChart from "../components/ev-stats/NetworksChart.svelte";
  import { chartColors, formatPower } from "../utils/charts";

  let country = "es";
  let orderNetworksBy = "locations";

  const setNetworkOrder = (newOrder) => {
    orderNetworksBy = newOrder;
  };

  const fetchData = async () => {
    const response = await fetch(
      "https://stats.staging.gaiagreen.dev/stats/es/"
    );
    return response.json();
  };
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
          {#await fetchData()}
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
                  })}</strong
                >
                <ChargersOverviewChart data={data.overview} />
              </p>
            </Card>
            <div class="doughnuts">
              <MaximumPowerChart data={data.max_power} />
              <SocketTypesChart data={data.connectors} />
              <ChargerStatesChart data={data.states} />
            </div>
            <Card style="scroll-snap-align: start;">
              <div class="subtitle" style="height: 400vw;">
                <div
                  style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1.5em;"
                >
                  <strong
                    >{$_("ev-stats.biggest-charging-networks", {
                      default: "Biggest charging networks",
                    })}
                  </strong>
                  <NetworkOrderDropdown
                    callback={setNetworkOrder}
                    {orderNetworksBy}
                  />
                </div>
                <NetworksChart data={data.networks} />
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
