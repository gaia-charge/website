<script>
  import { _, isLoading } from "svelte-i18n";
  import cloud from "$lib/assets/svg/Cloud.svg";
  import cloudMobile from "$lib/assets/svg/cloudMobile.svg";
</script>

{#if !$isLoading}
  <section class="container mx-auto" id="start">
    <div class="title text-center mx-auto">
      <h1>
        {$_("howToStart.title", {
          default: "How can you get started?",
        })}
      </h1>
      <p>
        {@html $_("howToStart.subtitle", {
          default:
            "You <em>could</em> call your electrician to install a basic EV charger from Amazon, but in reality<br/><em>the installation is just the first step</em> to a very complex ecosystem.",
        })}
      </p>
    </div>

    <div class=" flex items-center justify-center mt-12">
      <picture>
        <source media="(min-width: 431px)" srcset={cloud} />
        <img
          src={cloudMobile}
          class="image"
          alt={$_("howToStart.alt", {
            default: "Example aspects to keep in mind",
          })}
        />
      </picture>
    </div>
  </section>
{/if}

<style lang="postcss">
  .container {
    width: calc(1280 / var(--ratio));
    margin-top: calc(33 / var(--ratio));
    margin-bottom: calc(160 / var(--ratio));
    padding: calc(65 / var(--ratio)) 0;
  }

  .image {
    width: calc(930 / var(--ratio));
  }

  .title {
    width: calc(700 / var(--ratio));
  }

  .title h1 {
    font-family: theme("fontFamily.serif");
    font-size: calc(48 / var(--ratio));
    line-height: calc(56 / var(--ratio));
    font-weight: 400;
  }
  .title p {
    font-size: calc(18 / var(--ratio));
    line-height: calc(28 / var(--ratio));
    padding: calc(20 / var(--ratio));
    font-weight: 300;
  }
  @media only screen and (max-width: 431px) {
    .image {
      width: 110%;
      transform: scale(1.15);
    }

    .title {
      width: 90%;
    }
    .container {
      width: 90%;
    }
  }
</style>
