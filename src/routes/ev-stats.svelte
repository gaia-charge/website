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
  import CountryDropdown from "../components/ev-stats/CountryDropdown.svelte";

  let country = "es";
  let orderNetworksBy = "locations";
  const cachedData = {};

  const setNetworkOrder = (newOrder) => {
    orderNetworksBy = newOrder;
  };

  const setCountry = (newCountry) => {
    country = newCountry;
  };

  const fetchData = async (country, orderNetworksBy) => {
    if (orderNetworksBy === "total-power") orderNetworksBy = "power";
    const key = country + orderNetworksBy;
    if (!cachedData[key]) {
      const response = await fetch(
        `https://stats.staging.gaiagreen.dev/stats/${country}/?sort_networks_by=${orderNetworksBy}`
      );
      const data = await response.json();
      cachedData[key] = data;
    }
    return cachedData[key];
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
        <h2
          class="title"
          style="display: flex; justify-content: space-between; align-items: center;"
        >
          {$_("ev-stats.title", { default: "EV Charging Statistics" })}
          <CountryDropdown callback={setCountry} selectedCountry={country} />
        </h2>
        <div>
          {#await fetchData(country, orderNetworksBy)}
            <Card style="padding: 2em 0;">
              <div style="font-size: 4em;">
                <Loading />
              </div>
            </Card>
          {:then data}
            <Card style="margin-bottom: 1.5em; scroll-snap-align: start;">
              <div class="subtitle">
                <strong
                  >{$_("ev-stats.number-of-chargers-over-time", {
                    default: "Number of chargers over time",
                  })}</strong
                >
              </div>
              <ChargersOverviewChart data={data.overview} />
            </Card>
            <div class="doughnuts">
              <MaximumPowerChart data={data.max_power} />
              <SocketTypesChart data={data.connectors} />
              <ChargerStatesChart data={data.states} />
            </div>
            <Card style="scroll-snap-align: start;">
              <div
                class="subtitle"
                style="height: 400vw; padding-bottom: 1.5em;"
              >
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

            <Card style="margin-top: 1.5em;">
              <strong>{$_("ev-stats.note", { default: "Note" })}:</strong>
              {$_("ev-stats.note-content1", {
                default:
                  "all data and charts presented here are available under",
              })}
              <a
                href="https://creativecommons.org/licenses/by/4.0/"
                target="_blank">Attribution 4.0 International (CC BY 4.0)</a
              >
              {$_("ev-stats.note-content2", {
                default:
                  "license. You are free to share and adapt them to your needs as long as you attribute Gaia Green Tech as the source. Feel free to link to this website and/or mention our Facebook/Instagram/Twitter pages.",
              })}
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
