<script>
  import { _, isLoading } from "svelte-i18n";
  import arrow_right from "$lib/assets/svg/arrow_right.svg";
</script>

{#if !$isLoading}
<section class="container mx-auto">
  <div class="title text-center mx-auto">
    <h1>{$_("why.title", {
      default: "¿Por qué tu negocio necesita cargadores de VE?",
    })}</h1>
  </div>

  <div class="slider">
    
  </div>

  <div class="submit flex mx-auto">
    <button
      type="submit"
      class="contact ml-auto text-white bg-green border-green border-2 rounded-full flex items-center justify-between justify-end"
    >
    {$_("contact.cta", {
      default: "Enviar",
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
    margin-bottom: calc(105 / var(--ratio));
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

  .title p {
    font-size: calc(18 / var(--ratio));
    line-height: calc(28 / var(--ratio));
    padding: calc(20 / var(--ratio));
    font-weight: 300;
  }

  /* Description bubble */
  .description {
    background-color: white;
    padding: calc(30 / var(--ratio));
    border-radius: calc(30 / var(--ratio));
  }

  .description h3 {
    font-size: calc(18 / var(--ratio));
    line-height: calc(26 / var(--ratio));
  }

  .description p {
    font-size: calc(14 / var(--ratio));
    line-height: calc(20 / var(--ratio));
  }

  /* Planning section */
  .planning .description {
    top: calc(260 / var(--ratio));
    left: calc(450 / var(--ratio));
    width: calc(270 / var(--ratio));
  }

  .planning img {
    top: calc(300 / var(--ratio));
    left: calc(190 / var(--ratio));
    width: calc(339 / var(--ratio));
  }

  .line1 {
    top: calc(350 / var(--ratio));
    left: calc(752 / var(--ratio));
    width: calc(309 / var(--ratio));
  }

  /* Installation section */
  .installation .description {
    top: calc(530 / var(--ratio));
    left: calc(700 / var(--ratio));
    width: calc(270 / var(--ratio));
  }

  .installation img {
    top: calc(460 / var(--ratio));
    left: calc(940 / var(--ratio));
    width: calc(274 / var(--ratio));
  }

  .line2 {
    top: calc(570 / var(--ratio));
    left: calc(460 / var(--ratio));
    width: calc(210 / var(--ratio));
  }

  /* Monitoring section */
  .monitoring .description {
    top: calc(770 / var(--ratio));
    left: calc(490 / var(--ratio));
    width: calc(305 / var(--ratio));
  }

  .monitoring img {
    top: calc(750 / var(--ratio));
    left: calc(240 / var(--ratio));
    width: calc(271 / var(--ratio));
  }

  .line3 {
    top: calc(860 / var(--ratio));
    left: calc(810 / var(--ratio));
    width: calc(250 / var(--ratio));
  }

  /* Maintenance section */
  .maintenance .description {
    top: calc(1020 / var(--ratio));
    left: calc(770 / var(--ratio));
    width: calc(315 / var(--ratio));
  }

  .maintenance img {
    top: calc(920 / var(--ratio));
    left: calc(1020 / var(--ratio));
    width: calc(284 / var(--ratio));
  }

  .line4 {
    top: calc(1070 / var(--ratio));
    left: calc(510 / var(--ratio));
    width: calc(260 / var(--ratio));
  }

  /* Payments section */
  .payments .description {
    top: calc(1240 / var(--ratio));
    left: calc(520 / var(--ratio));
    width: calc(300 / var(--ratio));
  }

  .payments img {
    top: calc(1160 / var(--ratio));
    left: calc(340 / var(--ratio));
    width: calc(227 / var(--ratio));
  }
</style>
