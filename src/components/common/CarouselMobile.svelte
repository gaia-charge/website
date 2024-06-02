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

  $: indexSlideCarousel = 0;
  const numberOfSlideCarousel = imagesMobile.length; // IMPORTANT -- refer always to the number of guarantees
  export function left() {
    if (indexSlideCarousel > 0) {
      indexSlideCarousel--;
      const w = document.getElementById("carousel-mobile-slider").offsetWidth / 6;
      document.getElementById("carousel-mobile-slider").scrollLeft -= w;
    }
  }
  export function right() {
    if (indexSlideCarousel < numberOfSlideCarousel) {
      indexSlideCarousel++;
      const w = document.getElementById("carousel-mobile-slider").offsetWidth / 6;
      document.getElementById("carousel-mobile-slider").scrollLeft += w;
    }
  }
  let carousel; 
  $: indexByDotCarousel = 0;
  export const checkPosition = (position) => {
    if( position === 0 )
      indexByDotCarousel = 0;
    else {
      const containerW = document.getElementById("carousel-mobile-slider").offsetWidth * numberOfSlideCarousel;
      //const w = document.getElementById("carousel-mobile-slider").scrollWidth / numberOfSlideCarousel;
      const w = containerW / numberOfSlideCarousel;
      indexByDotCarousel = Math.floor(position / w);
    }
  }
  export const goTo = (index) => {
    const w = document.getElementById("carousel-mobile-slider").scrollWidth / numberOfSlideCarousel
    const to = (index - indexByDotCarousel) * w;
    document.getElementById("carousel-mobile-slider").scrollLeft += to;
    indexByDotCarousel = index;
  }

</script>

{#if !$isLoading}
  <section class="container mx-auto" id="guarantees">
    
    <div class="relative pl-4">
      <div  bind:this={carousel} 
        on:scroll={()=>checkPosition(carousel.scrollLeft)} class="relative scroll-snap-slider w-auto mobile-view" id="carousel-mobile-slider">
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
    {#each { length: numberOfSlideCarousel } as _, i}
      <li
        class={indexByDotCarousel === i ? "active" : ""}
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
    width: auto;
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
  .container{
    width: auto;
  }
}
</style>