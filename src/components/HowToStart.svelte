<script>
  import { _, isLoading } from "svelte-i18n";
  import cloud from "$lib/assets/svg/Cloud.svg";
</script>

{#if !$isLoading}
<section class="container mx-auto" id="start">
  <div class="title text-center mx-auto">
    <h1>{$_("howToStart.title", {
      default: "¿Cómo puedes empezar??",
    })}</h1>
    <p>
      {$_("howToStart.subtitle", {
        default: "Puedes empezar llamando a tu electricista para que instale un cargador comprado en Amazon, pero eso sólo es una pieza de un ecosistema mucho más grande.",
      })}
    </p>
  </div>

  <div class=" flex items-center justify-center mt-12">
    <img
      src={cloud}
      class="image"
      alt="Gaia Charge illustration"
    />
  </div>
</section>
{/if}

<style lang="postcss">
  :root {
    --ratio: 1440 * 1vw * 100;
  }

  .container {
    width: calc(1280 / var(--ratio));
    margin-top: calc(33 / var(--ratio));
    margin-bottom: calc(105 / var(--ratio));
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

</style>
