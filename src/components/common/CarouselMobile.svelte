<script>
  import { _, isLoading } from "svelte-i18n";

  import evsales from "$lib/assets/svg/evsales.svg";
  import great_customers from "$lib/assets/svg/great_customers.svg";
  import fleet_savings from "$lib/assets/svg/fleet_savings.svg";
  import arrow from "$lib/assets/svg/arrow.svg";

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

  $: indexSlideCarousel = 0;
  const numberOfSlideCarousel = images.length; // IMPORTANT -- refer always to the number of guarantees
  export function left() {
    if (indexSlideCarousel > 0) {
      indexSlideCarousel--;
      const w =
        document.getElementById("carousel-mobile-slider").offsetWidth /
        numberOfSlideCarousel;
      document.getElementById("carousel-mobile-slider").scrollLeft -= w;
    }
  }
  export function right() {
    if (indexSlideCarousel < numberOfSlideCarousel) {
      indexSlideCarousel++;
      const w =
        document.getElementById("carousel-mobile-slider").offsetWidth /
        numberOfSlideCarousel;
      document.getElementById("carousel-mobile-slider").scrollLeft += w;
    }
  }
  let carousel;
  $: indexByDotCarousel = 0;

  export const checkPosition = (position) => {
    if (position === 0) indexByDotCarousel = 0;
    else {
      const containerW =
        document.getElementById("carousel-mobile-slider").offsetWidth *
        numberOfSlideCarousel;
      //const w = document.getElementById("carousel-mobile-slider").scrollWidth / numberOfSlideCarousel;
      const w = containerW / numberOfSlideCarousel;
      indexByDotCarousel = Math.floor(position / w);
    }
  };

  export const goTo = (index) => {
    const containerW =
      document.getElementById("carousel-mobile-slider").offsetWidth *
      numberOfSlideCarousel;
    const w = containerW / numberOfSlideCarousel;
    const to = (index - indexByDotCarousel) * w;

    document.getElementById("carousel-mobile-slider").scrollLeft += to;
  };
</script>

{#if !$isLoading}
  <section class="container mx-auto" id="guarantees">
    <div class="relative pl-4">
      <div
        bind:this={carousel}
        on:scroll={() => checkPosition(carousel.scrollLeft)}
        class="relative scroll-snap-slider w-auto mobile-view"
        id="carousel-mobile-slider"
      >
        {#each images as src, imageIndex (src)}
          <div class="card">
            <h3>{src.header}</h3>
            <img src={src.url} alt={src.header} width="98%" height={600} />
            <p>
              {src.description}
            </p>
          </div>
        {/each}
      </div>
      <button class="rounded left shadow" on:click={left} aria-label="left">
        <img
          src={arrow}
          class="inline-block rotate-180 w-[14px] mr-1"
          alt={$_("carousel.previous", {
            default: "Previous",
          })}
        />
      </button>
      <button
        class="rounded right ml-1 shadow"
        on:click={right}
        aria-label="right"
      >
        <img
          src={arrow}
          class="inline-block w-[14px] ml-1"
          alt={$_("carousel.next", {
            default: "Next",
          })}
        />
      </button>
    </div>

    <div class="dots">
      {#each { length: numberOfSlideCarousel } as _, i}
        <button
          type="button"
          class="dots__button"
          class:active={indexByDotCarousel === i}
          on:click={() => goTo(i)}
        >
          <span class="sr-only">{i}</span>
        </button>
      {/each}
    </div>
  </section>
{/if}

<style lang="postcss">
  .card {
    scroll-snap-align: start;
    width: calc(100vw - 30px);
    background-color: white;
    border-radius: calc(20 / var(--ratio));
    padding: calc(95 / var(--ratio));
    margin-left: calc(50 / var(--ratio));
    margin-right: calc(70 / var(--ratio));
  }
  .card h3 {
    font-size: calc(64 / var(--ratio)) !important;
    line-height: calc(90 / var(--ratio));
    padding-bottom: calc(40 / var(--ratio));
  }
  .card p {
    font-size: calc(50 / var(--ratio)) !important;
    line-height: calc(70 / var(--ratio));
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
  .right {
    right: -1%;
  }
  .left {
    left: -1%;
  }

  .scroll-snap-slider {
    display: flex;
    flex-wrap: nowrap;
    justify-content: normal;
    overflow-x: auto;
    padding-inline: 0;

    scroll-behavior: smooth;
    scroll-snap-stop: always;
    scroll-snap-type: x mandatory;
    gap: 20px;
    margin-block-end: 55px;
    margin-block-start: calc(22 / var(--ratio));
  }
  .scroll-snap-slider:not(.-show-scroll-bar) {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }

  .scroll-snap-slider:not(.-show-scroll-bar)::-webkit-scrollbar {
    display: none;
  }

  .container {
    width: calc(1280 / var(--ratio));
    margin-top: calc(33 / var(--ratio));
    margin-bottom: calc(105 / var(--ratio));
    padding: calc(65 / var(--ratio)) 0;
  }

  @media only screen and (max-width: 431px) {
    .rounded {
      display: none;
    }

    .mobile-view {
      display: grid;
      grid-template-columns: repeat(9, 100%);
    }
    .container {
      width: auto;
      max-width: 100%;
    }
  }
</style>
