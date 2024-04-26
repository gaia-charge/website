<script>
  import Siema from 'siema';
  import { onMount } from 'svelte';
  import illustration from "$lib/assets/svg/header_illustration.svg";
  import carousel from "$lib/assets/svg/carousel1.svg";
  import arrow from "$lib/assets/svg/arrow.svg";

  
  let slider, prev, next, radioSlider;
  //let select = 0;
  export let dots = true;
  let currentIndex = 0;
  $: select = 0;
  $: pips = slider ? slider.innerElements : []
	$: currentPerPage = slider ? slider.perPage : 1
  $: totalDots = slider ? Math.ceil(slider.innerElements.length / currentPerPage) : []

  onMount(() => {
      slider = new Siema({
              selector: '.siema',
              duration: 200,
              easing: 'ease-in-out',
              perPage: 1,
              startIndex: 0,
              draggable: false,
              multipleDrag: false,
              threshold: 20,
              loop: false,
              rtl: false,
              onInit: () => {},
              onChange: () => {},
          }); //end Siema constructor
      prev = () => {
          slider.prev()
          if (select > 0) {
              select--
          }
      }
      next = () => {
          slider.next()
          if (select >= 0) {
              select++
          }
      }
  }) //end onMount

  export function isDotActive (dotIndex) {
      // if (currentIndex < 0) currentIndex = pips.length + currentIndex;
      // return currentIndex >= dotIndex*currentPerPage && currentIndex < (dotIndex*currentPerPage)+currentPerPage
      console.log(select, dotIndex)
      return select === dotIndex;
  }

  export function left () {
		slider.prev()
	}
	
	export function right () {
		slider.next()
	}

  export function go (index) {
		slider.goTo(index)
	}

const images = [
  {
    url: carousel,
    description: "image1",
  },
  {
    url: carousel,
    description: "image2",
  }
];
</script>

  <div class="siema">
    {#each images as src, imageIndex (src)}
      <div class="slider">
          <img src={src.url} alt={src.description} width="98%" height={600} />
      </div>
    {/each}
  </div>
  <ul class="">
		{#each {length: totalDots} as _, i}
		  <li on:click={() => go(i*currentPerPage)} on:keypress={() => go(i*currentPerPage)} class={ isDotActive(i) ? "active" : ""} ></li>
		{/each}
	</ul>
  <button class="rounded left" on:click={left} aria-label="left">
    <img src={arrow} class="inline-block rotate-180" alt="Contacto" />
  </button>
  <button class="rounded right" on:click={right} aria-label="right">
    <img src={arrow} class="inline-block" alt="Contacto" />
  </button>

  <style lang="postcss">
    :root {
      --ratio: 1440 * 1vw * 100;
    }
    .rounded{
      top: calc( 50% - 24px );
      position: absolute;
      display:flex;
      align-items: center;
      justify-content: center;
      background-color: white;
      width: calc(48 / var(--ratio));
      height: calc(48 / var(--ratio));
      border-radius: 50%;
    }
    .right{
      right: 1%
    }
    .left{
      left: -1%
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
		background-color: #DBDBDB;
		height: 12px;
		width: 12px;
	}
	ul li:hover {
		background-color: #6C6C6C;
	}
	ul li.active {
		background-color: #6C6C6C;
	}
  </style>

