<script>
  import { _, isLoading } from "svelte-i18n";
  import BenefitsCards from "./BenefitsCards.svelte";

  $: indexSlideBenefits = 0;
  const numberOfSlideBenefits = 5; // IMPORTANT -- refer always to the number of card
  export function left() {
    if (indexSlideBenefits > 0) {
      indexSlideBenefits--;
      const w = document.getElementById("benefits-slider").offsetWidth / 5;
      document.getElementById("benefits-slider").scrollLeft -= w;
    }
  }
  export function right() {
    if (indexSlideBenefits < numberOfSlideBenefits) {
      indexSlideBenefits++;
      const w = document.getElementById("benefits-slider").offsetWidth / 5;
      document.getElementById("benefits-slider").scrollLeft += w;
    }
  }
  let carousel;
  $: indexByDotBenefits = 0;
  export const checkPosition = (position) => {
    if (position === 0) indexByDotBenefits = 0;
    else {
      const w =
        document.getElementById("benefits-slider").scrollWidth /
        numberOfSlideBenefits;
      indexByDotBenefits = Math.floor(position / w);
    }
  };
  export const goTo = (index) => {
    const w =
      document.getElementById("benefits-slider").scrollWidth /
      numberOfSlideBenefits;
    const to = (index - indexByDotBenefits) * w;
    document.getElementById("benefits-slider").scrollLeft += to;
    indexByDotBenefits = index;
  };
</script>

{#if !$isLoading}
  <section class="root mt-6" id="benefits">
    <div class="for-you">
      <div class="container">
        <div class="title text-center mx-auto mb-10">
          <h2>
            {$_("whatForYou.title", {
              default: "What are your benefits when working with Gaia?",
            })}
          </h2>
        </div>
        <div class="no-mobile grid grid-cols-3 gap-16">
          <BenefitsCards />
        </div>
        <div class="relative pl-4 pr-4 mobile">
          <div
            bind:this={carousel}
            on:scroll={() => checkPosition(carousel.scrollLeft)}
            class="mobile relative scroll-snap-slider w-auto mobile-view"
            id="benefits-slider"
          >
            <BenefitsCards />
          </div>
        </div>
        <div class="dots">
          {#each { length: numberOfSlideBenefits } as _, i}
            <button
              type="button"
              class="dots__button"
              class:active={indexByDotBenefits === i}
              on:click={() => goTo(i)}
            >
              <span class="sr-only">{i}</span>
            </button>
          {/each}
        </div>
      </div>
    </div>
  </section>
{/if}

<style lang="postcss">
  .root {
    scroll-margin-block-start: calc(160 / var(--ratio));
  }

  .for-you {
    background-color: white;

    > .container {
      max-width: calc(1008 / var(--ratio));
      margin-inline-start: auto;
      margin-inline-end: auto;
      padding-block-start: calc(32 / var(--ratio));
      padding-block-end: calc(53 / var(--ratio));

      padding-block: clamp(2rem, calc(53 / var(--ratio)), 5rem);
    }

    .title {
      width: calc(540 / var(--ratio));
    }

    h2 {
      font-family: theme("fontFamily.serif");
      font-size: calc(48 / var(--ratio));
      line-height: calc(56 / var(--ratio));
      font-weight: 400;
    }
  }

  .mobile {
    display: none;
  }

  @media only screen and (max-width: 431px) {
    .no-mobile {
      display: none;
    }
    .mobile {
      display: block;
    }
    .for-you .title {
      width: 100%;
    }
    .for-you .container {
      max-width: 90%;
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
    .mobile-view {
      display: grid;
      grid-template-columns: repeat(5, 100%);
    }
    section {
      scroll-margin-block-start: 8rem !important;
    }
    .root {
      margin-top: 0;
    }
  }
</style>
