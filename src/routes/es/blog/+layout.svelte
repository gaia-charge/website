<script>
  import "@/app.css";
  import "aos/dist/aos.css";

  import AOS from "aos";
  import { onMount } from "svelte";

  import Analytics from "../../../components/Analytics.svelte";
  import { startClient } from "../../../services/i18n";
  import { _ } from "svelte-i18n";

  /** @type {import('./$types').PageData */
  export let data;
  startClient('es');

  onMount(() => {
    AOS.init();
  });
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
