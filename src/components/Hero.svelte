<script>
  import { _, isLoading } from "svelte-i18n";

  import illustration from "$lib/assets/svg/header_illustration.svg";
  import headerMobile from "$lib/assets/svg/header_mobile.svg";
  import arrow_right from "$lib/assets/svg/arrow_right.svg";
</script>

{#if !$isLoading}
  <div class="w-full">
  <picture>
    <source media="(min-width: 431px)" srcset={illustration}>
    <img
      src={headerMobile}
      class=" w-full absolute z-0"
      alt="Gaia Charge illustration"
    />
  </picture>
    
    <div class="headline absolute z-40 text-center">
      <h1>
        {$_("hero.title", {
          default: "A single EV charging solution",
        })}
        <br />
        <em
          >{$_("hero.subtitle", {
            default: "you can trust",
          })}</em
        >
      </h1>
      <a
        href="#contact"
        class="contact text-white bg-green border-green border-2 rounded-full mx-auto flex items-center justify-between"
      >
        {$_("contactBtn.cta", {
          default: "Contact us",
        })}
        <img
          src={arrow_right}
          class="inline-block"
          alt={$_("contactBtn.cta", {
            default: "Contact us",
          })}
        />
      </a>
    </div>
  </div>
{/if}

<style lang="postcss">
  :root {
    --ratio: 1440 * 1vw * 100;
  }

  .w-full {
    height: calc(1020 / var(--ratio));
  }

  .illustration {
    top: 0;
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

  .headline .contact {
    font-size: calc(16 / var(--ratio));
    font-weight: 400;
    padding: calc(15 / var(--ratio)) calc(20 / var(--ratio));
    width: calc(191 / var(--ratio));
    margin-top: calc(30 / var(--ratio));
  }

  .headline .contact img {
    width: calc(16 / var(--ratio));
  }

  @media only screen and (max-width: 431px) {
  .w-full {
    height: 100vh;
  }
  .headline {
    padding-top: 45%;
    padding-left: calc(200 / var(--ratio));
    padding-right: calc(200 / var(--ratio));
  }
}
</style>
