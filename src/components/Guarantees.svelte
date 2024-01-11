<script>
  import { _, isLoading } from "svelte-i18n";
  
</script>

{#if !$isLoading}
  <div class="container mx-auto">
    <h1 class="text-center">
      ¿Qué te garantizamos<br />al trabajar con Gaia?
    </h1>

    <div>

    </div>
  </div>
{/if}

<style lang="postcss">
  :root {
    --ratio: 1440 * 1vw * 100;
  }

  .container {
    width: calc(1280 / var(--ratio));
    margin-top: calc(33 / var(--ratio));
    margin-bottom: calc(105 / var(--ratio));
  }

  h1 {
    font-family: theme("fontFamily.serif");
    font-size: calc(48 / var(--ratio));
    font-weight: 300;
    line-height: calc(56 / var(--ratio));
    padding: calc(15 / var(--ratio));
  }
</style>
