<script>
  export let open = false;
	import { slide } from 'svelte/transition';
  import arrow from "$lib/assets/svg/ArrowAccordion.svg";

	let arrowBind;
	const handleClick = () => {
		open = !open
		open?
			arrowBind.style.transform = "rotate(180deg)"
			:
			arrowBind.style.transform = "rotate(0deg)"
	}
</script>

<div class="accordion">
	<div class="header" on:click={handleClick} on:keypress={handleClick} tabindex="0" role="button" aria-pressed="false">
		<div class="text">
			<slot name="head"></slot>	
		</div>
		
		<button >
			<img id="arrow-accordion" src={arrow} alt="Open/Close" bind:this={arrowBind}/>
		</button>
	</div>
	
	{#if open}
	<div class="details" transition:slide>
		<slot name="details">
		</slot>
	</div>
	{/if}
</div>

<style>
	div.accordion {
		margin: 1rem 0;
    border-block-end: 1px solid #044348;
    padding: 24px;
	}
	
	div.header {
		display:flex;
		width:100%;
		cursor: pointer;
	}
	
	div.header .text {
		flex: 1;
		margin-right: 5px;
    font-size: calc(18 / var(--ratio));
    line-height: calc(28 / var(--ratio));
    font-weight: 400;
	}
	
	div.details {
		padding:1rem;
    font-size: calc(16 / var(--ratio));
    line-height: calc(28 / var(--ratio));
    font-weight: 400;
	}
	@media only screen and (max-width: 431px) {
  div.header .text {
    font-size: 18px;
    line-height: 28px;
	}
	div.details {
    font-size: 14px;
    line-height: 24px;
    font-weight: 400;
		color: #6C6C6C;
	}
  
}
</style>
