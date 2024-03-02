<script>
  import { _, isLoading } from "svelte-i18n";
  import arrow_right from "$lib/assets/svg/arrow_right.svg";
  import Carousel from "./common/Carousel.svelte";
</script>

{#if !$isLoading}
<section class="container mx-auto" id="need">
  <div class="title text-center mx-auto">
    <h1>{$_("why.title", {
      default: "¿Por qué tu negocio necesita cargadores de VE?",
    })}</h1>
  </div>

  <div class="slider relative mt-10 mb-4">
    <Carousel/>
  </div>

  <div class="submit flex mx-auto">
    <button
      type="submit"
      class="contact ml-auto text-white bg-green border-green border-2 rounded-full flex items-center justify-between justify-end"
    >
    {$_("contact.cta", {
      default: "Contacto",
    })}
      <img src={arrow_right} class="inline-block" alt="Contacto" />
    </button>
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
    margin-bottom: calc(32 / var(--ratio));
    padding: calc(65 / var(--ratio)) 0;
  }

  .contact {
    font-size: calc(16 / var(--ratio));
    font-weight: 400;
    padding: calc(15 / var(--ratio)) calc(20 / var(--ratio));
    width: calc(191 / var(--ratio));
    margin-top: calc(30 / var(--ratio));
  }
  .submit {
    width: fit-content;
    display: flex;
    align-items: center;
    justify-items: center;
    justify-content: center;
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
