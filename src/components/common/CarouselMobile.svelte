<script>
  import { _, isLoading } from "svelte-i18n";
  import carouselMobile from "$lib/assets/svg/carouselMobile.svg";
  import arrow from "$lib/assets/svg/arrow.svg";

   const imagesMobile = [
    {
      url: carouselMobile,
      description: "image"
    },
    {
      url: carouselMobile,
      description: "image2"
    }
  ];

  $: indexSlide = 0;
  const numberOfSlide = imagesMobile.length; // IMPORTANT -- refer always to the number of guarantees
  export function left() {
    if (indexSlide > 0) {
      indexSlide--;
      const w = document.getElementById("guarantee-slider").offsetWidth / 6;
      document.getElementById("guarantee-slider").scrollLeft -= w;
    }
  }
  export function right() {
    if (indexSlide < numberOfSlide) {
      indexSlide++;
      const w = document.getElementById("guarantee-slider").offsetWidth / 6;
      document.getElementById("guarantee-slider").scrollLeft += w;
    }
  }
  let carousel; 
  $: indexByDot = 0;
  export const checkPosition = (position) => {
    if( position === 0 )
      indexByDot = 0;
    else {
      const w = document.getElementById("guarantee-slider").scrollWidth / numberOfSlide;
      indexByDot = Math.floor(position / w);
    }
  }
  export const goTo = (index) => {
    const w = document.getElementById("guarantee-slider").scrollWidth / numberOfSlide
    const to = (index - indexByDot) * w;
    document.getElementById("guarantee-slider").scrollLeft += to;
    indexByDot = index;
  }

</script>

{#if !$isLoading}
  <section class="container mx-auto" id="guarantees">
    
    <div class="relative pl-4 pr-4">
      <div  bind:this={carousel} 
        on:scroll={()=>checkPosition(carousel.scrollLeft)} class="relative scroll-snap-slider w-auto mobile-view" id="guarantee-slider">
       {#each imagesMobile as src, imageIndex (src)}
        <div class="card">
          <img src={src.url} alt={src.description} width="98%" height={600} />
        </div>
      {/each}
      </div>
      <button class="rounded left shadow" on:click={left} aria-label="left">
        <img src={arrow} class="inline-block rotate-180 w-[14px] mr-1" alt="Contacto" />
      </button>
      <button class="rounded right ml-1 shadow" on:click={right} aria-label="right">
        <img src={arrow} class="inline-block w-[14px] ml-1" alt="Contacto" />
      </button>
    </div>
    <ul class="visible">
    {#each { length: numberOfSlide } as _, i}
      <li
        class={indexByDot === i ? "active" : ""}
        on:click={() => goTo(i)}
      ></li>
    {/each}
    </ul>
  </section>
{/if}

<style lang="postcss">
  :root {
    --ratio: 1440 * 1vw * 100;
  }
  .card{
    scroll-snap-align: start;
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

  h1 {
    font-family: theme("fontFamily.serif");
    font-size: calc(48 / var(--ratio));
    font-weight: 300;
    line-height: calc(56 / var(--ratio));
    padding: calc(15 / var(--ratio));
  }

  ul {
    list-style-type: none;
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
  .visible {
    display: none;
  }
  @media only screen and (max-width: 431px) {
  .rounded {
    display: none;
  }
  .visible {
    display: flex !important;
  }
  .mobile-view {
    display: grid;
    grid-template-columns: repeat(9, 100%);
  }
}
</style>
