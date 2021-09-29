<script>
  export let onScroll;
</script>

<div on:scroll={onScroll} class="base-wrapper">
  <slot />
</div>

<style>
  .base-wrapper {
    height: 100vh;
    overflow-x: hidden;
    overflow-y: auto;
    perspective: 3px;
    position: relative;
  }
</style>
