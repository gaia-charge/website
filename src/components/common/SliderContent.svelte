<script>
  import { _, isLoading } from "svelte-i18n";
	import { fade } from 'svelte/transition';
  import directionLeft from "$lib/assets/svg/guarantees/DirectionButtonLeft.svg";
  import directionRight from "$lib/assets/svg/guarantees/DirectionButtonRight.svg";
  import contents from "./../../services/contents"

  let indexDisplay = 0;
  let lenghtContents = contents.length -1;
	const handleClickRight = () => { indexDisplay < lenghtContents && indexDisplay++ };
  const handleClickLeft = () => { indexDisplay > 0 && indexDisplay-- };
  $: showContents = contents;
</script>

<div class="slider_content">
  {#each contents as item, index}
    {#if index === indexDisplay}
      <div class="text">
        {$_(`sliderContent.${item}.description`, {
          default: "“Gaia Green Tech hizo que el proceso de instalación de un cargador de vehículos eléctricos para nuestros compañeros de trabajo fuera extremadamente fácil. Sólo pagamos una cuota mensual y nos olvidamos. Todo quedó resuelto.”",
        })}
      </div>
      <div class="name">
        {$_(`sliderContent.${item}.name`, {
          default: "Person",
        })}
      </div>
      <div class="who">
        {$_(`sliderContent.${item}.who`, {
          default: "Associacion",
        })}
      </div>
    {/if}
  {/each}
  <div class=" mt-14 h-full ">
    <button on:click={handleClickLeft} class=" mr-11">
      <img src={directionLeft} class="arrow" alt="Open/Close" />
    </button>
    <button on:click|preventDefault={handleClickRight}>
      <img src={directionRight} class="arrow" alt="Open/Close" />
    </button>
  </div>
  <ul class="visible">
    {#each { length: contents.length } as _, i}
      <li
        class={indexDisplay === i ? "active" : ""}
      ></li>
    {/each}
  </ul>
  
	
	<!-- {#if open}
	<div class="details" transition:slide>
		<slot name="details">
		</slot>
	</div>
	{/if} -->
</div>

<style>
	.slider_content {
    margin: auto;
		max-width: 900px;
    display: grid;
    grid-template-rows: 60% 5% 5% 30%;
    justify-items: center;
    gap: 5px;
    margin-block-end: 52px;
	}
	
	.text {
    font-size: calc(32 / var(--ratio));
    line-height: calc(40 / var(--ratio));;
    font-weight: 400;
    text-align: center;
    min-height: 160px;
    max-width: 900px;
    height: 300px;
	}
  .visible {
    display: none;
  }
  ul {
    list-style-type: none;
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: -30px;
    padding: 0;
    margin-block-start: 32px;
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
@media only screen and (max-width: 431px) {
  .text {
    font-size: 24px;
    line-height: 32px;
    font-weight: 400;
    text-align: center;
    min-height: 160px;
    height: 200px;
    width: 90%;
	}
  .visible {
    display: flex !important;
  }
  
}
	
</style>
