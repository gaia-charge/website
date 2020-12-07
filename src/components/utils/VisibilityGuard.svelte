<script>
  import { onMount } from "svelte";
  //import {  afterUpdate } from 'svelte';

  export let top = 0;
  export let bottom = 0;
  export let left = 0;
  export let right = 0;

  let el = null;

  let visible = false;
  let hasBeenVisible = false;
  let observer;

  // afterUpdate(() => {
  //   if (hasBeenVisible) 
  //     observer.unobserve(el);
	// });
    

  onMount(() => {
    if(!hasBeenVisible){
      const rootMargin = `${bottom}px ${left}px ${top}px ${right}px`;
      observer = new IntersectionObserver(entries => {
        visible = entries[0].isIntersecting;
        hasBeenVisible = hasBeenVisible || visible;
      },{
        rootMargin
      });
    observer.observe(el);
    }
      

    return () => observer.unobserve(el);
  });

</script>

<style>
  div {
    width: 100%;
    height: 100%;
  }
</style>

<div bind:this={el}>
  <slot {visible} {hasBeenVisible} />
</div>