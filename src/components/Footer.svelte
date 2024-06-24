<script>
  import { _, isLoading } from "svelte-i18n";
  import footer from "$lib/assets/svg/footer/footer.svg";
  import footerMobile from "$lib/assets/svg/footer/footermobile.svg";
</script>

{#if !$isLoading}
  <div class="w-full relative">
    <picture>
      <source media="(min-width: 431px)" srcset={footer} />
      <img
        src={footerMobile}
        class="illustration w-full absolute z-0"
        alt="Gaia Charge illustration"
      />
    </picture>
    <div class="headline absolute z-40 text-center w-full">
      <h1 class="title text-center">
        {$_("footer.title", {
          default: "Follow us on",
        })}
      </h1>
      <div class=" flex justify-center gap-4 column">
        <a
          href={$_("socials.linkedin", {
            default: "https://ggrn.link/linkedin-es",
          })}
          class="socials">LinkedIn</a
        >
        <a
          href={$_("socials.instagram", {
            default: "https://ggrn.link/instagram-es",
          })}
          class="socials">Instagram</a
        >
        <a
          href={$_("socials.mastodon", {
            default: "https://ggrn.link/mastodon-es",
          })}
          class="socials">Mastodon</a
        >
        <a
          href={$_("socials.facebook", {
            default: "https://ggrn.link/facebook-es",
          })}
          class="socials">Facebook</a
        >
      </div>
    </div>
  </div>
{/if}

<style>
  .headline {
    top: calc(200 / var(--ratio));
  }

  .title {
    font-family: theme("fontFamily.serif");
    font-size: calc(48 / var(--ratio));
    font-weight: 300;
    line-height: calc(56 / var(--ratio));
    padding: calc(15 / var(--ratio));
    color: white;
  }
  .socials {
    font-size: calc(16 / var(--ratio));
    line-height: calc(28 / var(--ratio));
    font-weight: 400;
    color: white;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 431px) {
    .headline {
      padding-top: 125px;
      padding-left: calc(200 / var(--ratio));
      padding-right: calc(200 / var(--ratio));
    }
    .socials {
      font-size: 16px;
      line-height: 28px;
      font-weight: 400;
    }
    .column {
      flex-direction: column;
      gap: 35px;
      margin-block-start: 35px;
    }
  }
</style>
