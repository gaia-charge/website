<script>
  import { _, isLoading, locale } from "svelte-i18n";
  import Nav from "../../../components/Nav.svelte";
  import Footer from "../../../components/Footer.svelte";
  import appStoreBadgeEn from "$lib/assets/stores/app-store-badge-en.svg";
  import appStoreBadgeEs from "$lib/assets/stores/app-store-badge-es.svg";
  import googlePlayBadgeEn from "$lib/assets/stores/google-play-badge-en.png";
  import googlePlayBadgeEs from "$lib/assets/stores/google-play-badge-es.png";

  const videoUrl = "https://ggt-public.s3.fr-par.scw.cloud/gaia_charge_app_preview.mp4";

  $: appStoreBadge = $locale === 'en' ? appStoreBadgeEn : appStoreBadgeEs;
  $: googlePlayBadge = $locale === 'en' ? googlePlayBadgeEn : googlePlayBadgeEs;
  $: canonicalUrl = `https://gaiacharge.com/${$locale}/app`;
</script>

<svelte:head>
  <title>Gaia Charge App</title>
  <link rel="canonical" href={canonicalUrl} />
</svelte:head>

<Nav />

{#if !$isLoading}
  <div>
    <div class="headline z-40 text-center">
      <h1>
        {$_("app.title", {
          default: "Find public EV chargers",
        })}
        <br />
        <em
          >{$_("app.subtitle", {
            default: "across Spain with ease.",
          })}</em
        >
      </h1>
      <video class="phone-video" src={videoUrl} autoplay muted loop playsinline></video>
      <div class="app-store-buttons">
        <a href="https://ggrn.link/app-ios" target="_blank" rel="noopener noreferrer">
          <img src={appStoreBadge} alt={$_("app.appStore", {
            default: "Download on the App Store",
          })} />
        </a>
        <a href="https://ggrn.link/app-android" target="_blank" rel="noopener noreferrer">
          <img src={googlePlayBadge} alt={$_("app.googlePlay", {
            default: "Get it on Google Play",
          })} />
        </a>
      </div>
      <p class="mt-5">
        {@html $_("app.description", {
          default:
            "Reve Map is an unofficial app for MapaReve.es, the official registry of public electric vehicle charging points in Spain.",
        })}
      </p><p>
        {@html $_("app.description2", {
          default:
            "It allows you to see the nearby charging points on a map, filter them by type and status, and get directions with Apple Maps, Google Maps or Waze.",
        })}
      </p>
    </div>
    
  </div>
{/if}

<Footer />

<style lang="postcss">
  .h-full {
    height: calc(1020 / var(--ratio));
  }

  .headline {
    padding-top: calc(179 / var(--ratio));
    padding-left: calc(380 / var(--ratio));
    padding-right: calc(380 / var(--ratio));
  }

  .headline h1 {
    font-family: theme("fontFamily.serif");
    font-size: calc(52 / var(--ratio));
    font-weight: 500;
    line-height: calc(57 / var(--ratio));
  }

  @media only screen and (max-width: 431px) {
    .h-full {
      height: 100vh;
    }

    .headline {
      padding-top: 45%;
      padding-left: calc(200 / var(--ratio));
      padding-right: calc(200 / var(--ratio));
    }

    .app-store-buttons {
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
    }
  }

  .phone-video {
    border: 5px solid #222;
    border-radius: 2.5em;
    box-shadow: 0 4px 24px rgba(0,0,0,0.15);
    width: 320px;
    height: calc(310px / 0.4604166667);
    max-width: 100%;
    display: block;
    margin: 2em auto 0 auto;
    background: #000;
  }

  .app-store-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-top: 2rem;
  }

  .app-store-buttons img {
    height: 40px;
    transition: transform 0.2s ease;
  }

  .app-store-buttons img:hover {
    transform: scale(1.05);
  }

  p {
    font-size: calc(18 / var(--ratio));
    line-height: calc(28 / var(--ratio));
    padding: calc(20 / var(--ratio));
    font-weight: 300;
  }
</style>
