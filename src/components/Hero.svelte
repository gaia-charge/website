<script>
  import { _, isLoading } from "svelte-i18n";

  import illustration from "$lib/assets/svg/header_illustration.svg";
  import arrow_right from "$lib/assets/svg/arrow_right.svg";
</script>

{#if !$isLoading}
  <div class="w-full">
    <img
      src={illustration}
      class="illustration w-full absolute z-0"
      alt="Gaia Charge illustration"
    />
    <div class="headline absolute z-40 text-center">
      <h1>
        {$_("hero.title", {
          default: "Cargadores de vehículos eléctricos para tu negocio",
        })}
        <br />
        <em>{$_("hero.subtitle", {
          default: "¡sin inversión!",
        })}</em>
      </h1>
      <a
        href="#contact"
        class="contact text-white bg-green border-green border-2 rounded-full mx-auto flex items-center justify-between"
      >
      {$_("contactBtn.cta", {
        default: "Contacto",
      })}
        <img src={arrow_right} class="inline-block" alt="Contacto" />
      </a>
    </div>
  </div>
{/if}

<style lang="postcss">
  :root {
    --ratio: 1440 * 1vw * 100;
  }

  em {
    font-style: normal;
    /* border-bottom: 2px dashed theme("colors.green"); */
    color: theme("colors.green");
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
</style>
