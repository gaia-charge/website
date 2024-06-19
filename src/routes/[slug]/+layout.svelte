<script>
  import "../../app.css";
  import Analytics from "../../components/Analytics.svelte";
  import { startClient } from "../../services/i18n";
  import { _ } from "svelte-i18n";

  /** @type {import('./$types').PageData */
  export let data;
  let { initialLocale } = data;
  $: ({ initialLocale } = data);
  startClient(initialLocale);
</script>

<main>
  <Analytics />
  <slot />
</main>

<style>
  main {
    position: relative;
  }
</style>
