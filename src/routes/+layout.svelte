<script>
  import { afterUpdate, beforeUpdate } from "svelte";
  import { useAckeeSapper } from "svelte-ackee";
  import { startClient } from "../services/i18n";
  import * as Sentry from "@sentry/browser";
  import { Integrations } from "@sentry/tracing";
  import "@beyonk/gdpr-cookie-consent-banner/style.css"; // optional, you can also define your own styles
  import { Banner as GdprBanner } from "@beyonk/gdpr-cookie-consent-banner";
  import { HubSpotTracking } from "@beyonk/svelte-hubspot";

  Sentry.init({
    dsn: "https://3e6147df857f4f798b79196e963e1895@o1035330.ingest.sentry.io/6002173",
    integrations: [new Integrations.BrowserTracing()],
    tracesSampleRate: 1.0,
  });

  let hubSpotTracking;
  let consented = false;

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

  function initAnalytics() {
    console.log("Consented to analytics");
    consented = true;
    hubSpotTracking.loadChatWidget();
  }
</script>

<main>
  <GdprBanner
    cookieName="consent"
    description="Stores the visitor's consent for analytics and tracking"
    on:analytics={initAnalytics}
  />
  <HubSpotTracking
    hubId="139602210"
    doNotTrack={!consented}
    bind:this={hubSpotTracking}
  />
  <slot />
</main>
