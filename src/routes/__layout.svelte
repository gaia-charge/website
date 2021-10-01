<script context="module">
  import { getInitialLocale } from "../services/i18n";
  /**
   * @type {import('@sveltejs/kit').Load}
   */
  export async function load() {
    const initialLocale = getInitialLocale();
    return {
      props: {
        initialLocale,
      },
    };
  }
</script>

<script>
  import { afterUpdate, beforeUpdate } from "svelte";
  import { useAckeeSapper } from "svelte-ackee";
  import { startClient } from "../services/i18n";

  export let initialLocale;
  startClient(initialLocale);

  if (typeof navigator !== "undefined") {
    useAckeeSapper(
      beforeUpdate,
      afterUpdate,
      {
        server: import.meta.env.VITE_ACKEE_SERVER,
        domainId: import.meta.env.VITE_ACKEE_DOMAIN_ID,
      },
      {
        ignoreLocalhost: false,
        detailed: true,
      }
    );
  }
</script>

<main>
  <slot />
</main>
