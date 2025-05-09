<script>
  import { _, isLoading } from "svelte-i18n";

  import great_experience from "$lib/assets/svg/guarantees/great_experience.svg";
  import business_partner from "$lib/assets/svg/guarantees/business_partner.svg";
  import maintenance from "$lib/assets/svg/guarantees/maintenance.svg";
  import payment from "$lib/assets/svg/guarantees/payment.svg";
  import support from "$lib/assets/svg/guarantees/support.svg";
  import visibility from "$lib/assets/svg/guarantees/visibility.svg";
  import information from "$lib/assets/svg/guarantees/information.svg";
  import energy_saving from "$lib/assets/svg/guarantees/energy_saving.svg";
  import eu_quality from "$lib/assets/svg/guarantees/eu_quality.svg";

  import Guarantee from "./Guarantee.svelte";
  import arrow from "$lib/assets/svg/arrow.svg";

  $: indexSlide = 0;
  const numberOfSlide = 9; // IMPORTANT -- refer always to the number of guarantees
  export function left() {
    if (indexSlide > 0) {
      indexSlide--;
      const w = document.getElementById("guarantee-slider").offsetWidth / 5;
      document.getElementById("guarantee-slider").scrollLeft -= w;
    }
  }
  export function right() {
    if (indexSlide < numberOfSlide) {
      indexSlide++;
      const w = document.getElementById("guarantee-slider").offsetWidth / 5;
      document.getElementById("guarantee-slider").scrollLeft += w;
    }
  }
  let carousel;
  $: indexByDot = 0;
  export const checkPosition = (position) => {
    if (position === 0) indexByDot = 0;
    else {
      const w =
        document.getElementById("guarantee-slider").scrollWidth / numberOfSlide;
      indexByDot = Math.floor(position / w);
    }
  };
  export const goTo = (index) => {
    const w =
      document.getElementById("guarantee-slider").scrollWidth / numberOfSlide;
    const to = (index - indexByDot) * w;
    document.getElementById("guarantee-slider").scrollLeft += to;
    indexByDot = index;
  };
</script>

{#if !$isLoading}
  <section class="container mx-auto" id="guarantees">
    <h2 class="text-center whitespace-pre-line">
      {$_("guarantees.title", {
        default: "Gaia Charge guarantees:",
      })}
    </h2>

    <div class="relative pl-4 pr-4">
      <div
        bind:this={carousel}
        on:scroll={() => checkPosition(carousel.scrollLeft)}
        class="relative scroll-snap-slider w-auto mobile-view"
        id="guarantee-slider"
      >
        <Guarantee
          image={great_experience}
          title={$_("guarantees.great_experience.title", {
            default: "Great driver experience",
          })}
          description={$_("guarantees.great_experience.description", {
            default:
              "Happy drivers come back and recommend good locations to others.",
          })}
        />
        <Guarantee
          image={business_partner}
          title={$_("guarantees.business_partner.title", {
            default: "Business partnership",
          })}
          description={$_("guarantees.business_partner.description", {
            default:
              "We won't run away after the installation. We are here to grow with you.",
          })}
        />
        <Guarantee
          image={maintenance}
          title={$_("guarantees.maintenance.title", {
            default: "Maintenance",
          })}
          description={$_("guarantees.maintenance.description", {
            default:
              "We take care not only of the hardware but also of the software maintenance.",
          })}
        />
        <Guarantee
          image={payment}
          title={$_("guarantees.payment.title", {
            default: "Payments",
          })}
          description={$_("guarantees.payment.description", {
            default:
              "However you choose to receive payments, we will make it happen securily and on time.",
          })}
        />
        <Guarantee
          image={support}
          title={$_("guarantees.support.title", {
            default: "Support",
          })}
          description={$_("guarantees.support.description", {
            default:
              "In case of any issues or questions, the drivers will come directly to us.",
          })}
        />
        <Guarantee
          image={visibility}
          title={$_("guarantees.visibility.title", {
            default: "Visibility",
          })}
          description={$_("guarantees.visibility.description", {
            default:
              "We will make sure that your location is visible on all the platforms, bringing even more customers.",
          })}
        />
        <Guarantee
          image={information}
          title={$_("guarantees.information.title", {
            default: "Information",
          })}
          description={$_("guarantees.information.description", {
            default:
              "We will share all the insights you need to make the right decisions.",
          })}
        />
        <Guarantee
          image={energy_saving}
          title={$_("guarantees.energy_saving.title", {
            default: "Energy saving",
          })}
          description={$_("guarantees.energy_saving.description", {
            default:
              "All our charging points are designed to utilize the excess energy contracted and generated with renewables.",
          })}
        />
        <Guarantee
          image={eu_quality}
          title={$_("guarantees.eu_quality.title", {
            default: "EU quality standards",
          })}
          description={$_("guarantees.eu_quality.description", {
            default:
              "All our products are manufactured and certified with the highest EU quality standards.",
          })}
        />
      </div>
      <button class="rounded left shadow" on:click={left} aria-label="left">
        <img
          src={arrow}
          class="inline-block rotate-180 w-[14px] mr-1"
          alt="Contacto"
        />
      </button>
      <button
        class="rounded right ml-1 shadow"
        on:click={right}
        aria-label="right"
      >
        <img src={arrow} class="inline-block w-[14px] ml-1" alt="Contacto" />
      </button>
    </div>

    <div class="dots">
      {#each { length: numberOfSlide } as _, i}
        <button
          type="button"
          class="dots__button"
          class:active={indexByDot === i}
          on:click={() => goTo(i)}
        >
          <span class="sr-only">{i}</span>
        </button>
      {/each}
    </div>
  </section>
{/if}

<style lang="postcss">
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

  h2 {
    font-family: theme("fontFamily.serif");
    font-size: calc(48 / var(--ratio));
    font-weight: 300;
    line-height: calc(56 / var(--ratio));
    padding: calc(15 / var(--ratio));
  }

  @media only screen and (max-width: 431px) {
    .rounded {
      display: none;
    }

    .mobile-view {
      display: grid;
      grid-template-columns: repeat(9, 100%);
    }
  }
</style>
