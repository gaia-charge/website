<script>
  import { startClient } from "../services/i18n";
  import * as Sentry from "@sentry/browser";
  import { Integrations } from "@sentry/tracing";

  Sentry.init({
    dsn: import.meta.env.VITE_SENTRY_DSN,
    integrations: [new Integrations.BrowserTracing()],
    tracesSampleRate: 1.0,
  });

  /** @type {import('./$types').PageData */
  export let data;
  let { initialLocale } = data;
  $: ({ initialLocale } = data);
  startClient(initialLocale);
</script>

<main>
  <slot />
</main>
