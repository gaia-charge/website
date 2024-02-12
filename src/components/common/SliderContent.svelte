<script>
  export let open = false;
	import { slide } from 'svelte/transition';
  import directionLeft from "$lib/assets/svg/guarantees/DirectionButtonLeft.svg";
  import directionRight from "$lib/assets/svg/guarantees/DirectionButtonRight.svg";
  import contents from "./../../services/contents"

  let indexDisplay = 0;
  let lenghtContents = contents.length;
	const handleClickRight = () => { console.log(index, lenghtContents); indexDisplay = indexDisplay+1 };
  const handleClickLeft = () => { index > 0 && index-- };
  $: showContents = contents;
</script>

<div class="slider_content">
  {#each contents as item, index}
    {#if index === indexDisplay}
      <div class="text">
        {item.description}
      </div>
      <div class="name">
        {item.name}
      </div>
      <div class="who">
        {item.who} {index}
      </div>
    {/if}
  {/each}
  <div class=" mt-4">
    <button on:click={handleClickLeft} >
      <img src={directionLeft} class="arrow" alt="Open/Close" />
    </button>
    <button on:click|preventDefault={handleClickRight}>
      <img src={directionRight} class="arrow" alt="Open/Close" />
    </button>
  </div>
  
	
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
	}
	
	.text {
    font-size: calc(32 / var(--ratio));
    line-height: calc(40 / var(--ratio));;
    font-weight: 400;
    text-align: center;
	}
	
</style>
