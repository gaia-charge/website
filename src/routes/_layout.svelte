<script>
  export let segment;
</script>

<main {segment}>
  <slot />
</main>

<style>
  main {
    position: relative;
    background-color: white;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>
