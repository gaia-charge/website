<script>
  import { _, isLoading } from "svelte-i18n";
</script>

<svelte:head>
  <title>Gaia Charge</title>
</svelte:head>


{#if !$isLoading}
  Loaded
{/if}

<style>

</style>
