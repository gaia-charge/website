<script>
  import { _, isLoading } from "svelte-i18n";
  import GdprBanner from "@beyonk/gdpr-cookie-consent-banner";
  import { PlausibleAnalytics } from "@accuser/svelte-plausible-analytics";

  let enableAnalytics = false;
  let enableMarketing = false;

  function initAnalytics() {
    console.log("Consented to analytics");
    enableAnalytics = true;
  }

  function initMarketing() {
    console.log("Consented to marketing");
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
