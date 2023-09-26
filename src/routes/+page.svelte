<script>
  import { _, isLoading } from "svelte-i18n";
  import Nav from "../components/Nav.svelte";
</script>

<svelte:head>
  <title>Gaia Charge</title>
</svelte:head>


{#if !$isLoading}
  <Nav />
{/if}
