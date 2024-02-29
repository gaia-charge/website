<script>
  export let open = false;
	import { slide } from 'svelte/transition';
  import arrow from "$lib/assets/svg/ArrowAccordion.svg";
	const handleClick = () => open = !open
</script>

<div class="accordion">
	<div class="header">
		<div class="text">
			<slot name="head"></slot>	
		</div>
		
		<button on:click={handleClick} >
			<img src={arrow} class="arrow" alt="Open/Close" />
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
</style>
