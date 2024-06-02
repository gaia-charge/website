<script>
  import Siema from "siema";
  import { onMount } from "svelte";
  import evsales from "$lib/assets/svg/evsales.svg";
  import great_customers from "$lib/assets/svg/great_customers.svg";
  import fleet_savings from "$lib/assets/svg/fleet_savings.svg";
  import arrow from "$lib/assets/svg/arrow.svg";
  import { _, isLoading } from "svelte-i18n";

  let slider, prev, next, radioSlider;
  //let select = 0;
  export let dots = true;
  let currentIndex = 0;
  $: select = 0;
  $: pips = slider ? slider.innerElements : [];
  $: currentPerPage = slider ? slider.perPage : 1;
  $: totalDots = slider
    ? Math.ceil(slider.innerElements.length / currentPerPage)
    : [];

  onMount(() => {
    slider = new Siema({
      selector: ".siema",
      duration: 200,
      easing: "ease-in-out",
      perPage: 1,
      startIndex: 0,
      draggable: false,
      multipleDrag: false,
      threshold: 20,
      loop: true,
      rtl: false,
      onInit: () => {},
      onChange: () => {},
    }); //end Siema constructor
    prev = () => {
      slider.prev();
      if (select > 0) {
        select--;
      }
    };
    next = () => {
      slider.next();
      if (select >= 0) {
        select++;
      }
    };
  }); //end onMount

  export function isDotActive(dotIndex) {
    // if (currentIndex < 0) currentIndex = pips.length + currentIndex;
    // return currentIndex >= dotIndex*currentPerPage && currentIndex < (dotIndex*currentPerPage)+currentPerPage
    console.log(select, dotIndex);
    return select === dotIndex;
  }

  export function left() {
    slider.prev();
  }

  export function right() {
    slider.next();
  }

  export function go(index) {
    slider.goTo(index);
  }

  const images = [
    {
      url: evsales,
      header: $_("carousel.evSales.header", {
        default: "Because the sales of electric vehicles keep increasing",
      }),
      description: $_("carousel.evSales.description", {
        default:
          "Sales of EV already surpassed those of Diesel and the best selling car of the world is an EV.",
      }),
    },
    {
      url: great_customers,
      header: $_("carousel.greatCustomers.header", {
        default: "Because the EV drivers make for great customers",
      }),
      description: $_("carousel.greatCustomers.description", {
        default:
          "On average they are more welthy, spend more and are more loyal.",
      }),
    },
    {
      url: fleet_savings,
      header: $_("carousel.fleetSavings.header", {
        default: "Because switching your fleet to EVs can save you money",
      }),
      description: $_("carousel.fleetSavings.description", {
        default:
          "Running costs of EVs are fraction of the price of combustion vehicles.",
      }),
    },
  ];
</script>

{#if !$isLoading}
  <div class="siema">
    {#each images as src, imageIndex (src)}
      <div class="slider">
        <h3>{src.header}</h3>
        <img src={src.url} alt={src.description} width="98%" height={600} />
        <p>
          {src.description}
        </p>
      </div>
    {/each}
  </div>

  <ul class="">
    {#each { length: totalDots } as e, i}
      <li
        on:click={() => go(i * currentPerPage)}
        on:keypress={() => go(i * currentPerPage)}
        class={isDotActive(i) ? "active" : ""}
      ></li>
    {/each}
  </ul>

  <button class="rounded left shadow" on:click={left} aria-label="left">
    <img
      src={arrow}
      class="inline-block rotate-180"
      alt={$_("carousel.previous", {
        default: "Previous",
      })}
    />
  </button>
  <button class="rounded right shadow" on:click={right} aria-label="right">
    <img
      src={arrow}
      class="inline-block"
      alt={$_("carousel.next", {
        default: "Next",
      })}
    />
  </button>
{/if}

<style lang="postcss">
  :root {
    --ratio: 1440 * 1vw * 100;
  }
  .slider {
    background-color: white;
    border-radius: calc(20 / var(--ratio));
    padding: calc(95 / var(--ratio));
    margin-left: calc(50 / var(--ratio));
    margin-right: calc(70 / var(--ratio));
  }
  .slider h3 {
    font-size: calc(32 / var(--ratio));
    line-height: calc(40 / var(--ratio));
    padding-bottom: calc(40 / var(--ratio));
  }
  .slider p {
    font-size: calc(24 / var(--ratio));
    line-height: calc(34 / var(--ratio));
    padding-top: calc(40 / var(--ratio));
  }

  .rounded {
    top: calc(50% - 24px);
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    width: calc(48 / var(--ratio));
    height: calc(48 / var(--ratio));
    border-radius: 50%;
  }
  .rounded img {
    width: calc(24 / var(--ratio));
    height: calc(24 / var(--ratio));
  }
  .right {
    right: 1%;
  }
  .left {
    left: -1%;
  }

  ul {
    list-style-type: none;
    position: absolute;
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: -30px;
    padding: 0;
  }
  ul li {
    margin: 6px;
    border-radius: 100%;
    background-color: #dbdbdb;
    height: 12px;
    width: 12px;
  }
  ul li.active {
    background-color: #6c6c6c;
  }
</style>
