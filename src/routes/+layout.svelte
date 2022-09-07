<script>
  import { afterUpdate, beforeUpdate } from "svelte";
  import { useAckeeSapper } from "svelte-ackee";
  import { startClient } from "../services/i18n";
  import * as Sentry from "@sentry/browser";
  import { Integrations } from "@sentry/tracing";

  Sentry.init({
    dsn: "https://3e6147df857f4f798b79196e963e1895@o1035330.ingest.sentry.io/6002173",
    integrations: [new Integrations.BrowserTracing()],
    tracesSampleRate: 1.0,
  });

  /** @type {import('./$types').PageData */
  export let data;
  let { initialLocale } = data;
  $: ({ initialLocale } = data);
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
