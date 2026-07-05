<script>
  import { _, isLoading } from "svelte-i18n";
  import GdprBanner from "@beyonk/gdpr-cookie-consent-banner";
  import { PlausibleAnalytics } from "@accuser/svelte-plausible-analytics";

  let enableAnalytics = false;
  let enableMarketing = false;
  let leadfeederLoaded = false;

  // Leadfeeder (Dealfront) visitor tracking. Only loaded once the visitor has
  // consented to analytics cookies, so the `_lfa` cookie is never set before
  // consent (LSSI-CE Art. 22.2 / GDPR).
  function loadLeadfeeder() {
    if (leadfeederLoaded || typeof document === "undefined") return;
    leadfeederLoaded = true;

    const siteKey = "p1e024BKMYWaGB6d";
    window.ldfdr =
      window.ldfdr ||
      function () {
        (window.ldfdr._q = window.ldfdr._q || []).push(
          [].slice.call(arguments),
        );
      };

    const firstScript = document.getElementsByTagName("script")[0];
    const tracker = document.createElement("script");
    tracker.src = `https://sc.lfeeder.com/lftracker_v1_${siteKey}.js`;
    tracker.async = true;
    firstScript.parentNode.insertBefore(tracker, firstScript);
  }

  function initAnalytics() {
    enableAnalytics = true;
    loadLeadfeeder();
  }

  function initMarketing() {
    enableMarketing = true;
  }
</script>

{#if !$isLoading}
  <GdprBanner
    cookieName="consent"
    cookieConfig={{
      domain: import.meta.env.VITE_GDPR_COOKIE_DOMAIN,
    }}
    canRejectCookies={true}
    heading={$_("gdpr.heading", {
      default: "We value your privacy",
    })}
    description={$_("gdpr.description", {
      default:
        'We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Confirm all", you consent to our use of cookies.',
    })}
    acceptLabel={$_("gdpr.accept", {
      default: "Accept all",
    })}
    rejectLabel={$_("gdpr.reject", {
      default: "Reject all",
    })}
    settingsLabel={$_("gdpr.settings", {
      default: "Customize",
    })}
    closeLabel={$_("gdpr.close", {
      default: "Close window",
    })}
    editLabel={$_("gdpr.edit", {
      default: "Edit settings",
    })}
    choices={{
      necessary: {
        label: $_("gdpr.choices.necessary.label", {
          default: "Necessary cookies",
        }),
        description: $_("gdpr.choices.necessary.description", {
          default: "Used for cookie control. Can't be turned off.",
        }),
        value: true,
      },
      tracking: {
        label: $_("gdpr.choices.tracking.label", {
          default: "Tracking cookies",
        }),
        description: $_("gdpr.choices.tracking.description", {
          default: "Used for advertising purposes.",
        }),
        value: true,
      },
      analytics: {
        label: $_("gdpr.choices.analytics.label", {
          default: "Analytics cookies",
        }),
        description: $_("gdpr.choices.analytics.description", {
          default:
            "Used to control Plausible Analytics, a 3rd party tool to analyze website traffic.",
        }),
        value: true,
      },
      marketing: {
        label: $_("gdpr.choices.marketing.label", {
          default: "Marketing cookies",
        }),
        description: $_("gdpr.choices.marketing.description", {
          default: "Used for marketing data.",
        }),
        value: true,
      },
    }}
    on:analytics={initAnalytics}
    on:marketing={initMarketing}
  />

  <PlausibleAnalytics enabled={enableAnalytics} domain="gaiacharge.com" />
{/if}
