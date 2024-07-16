<script>
  import { _, isLoading } from "svelte-i18n";
  import cloud from "$lib/assets/svg/Cloud.svg";
  import cloudMobile from "$lib/assets/svg/cloudMobile.svg";

  export let list = [
    { text: "Informes de uso" },
    { text: "Mejoreas del equipamientro", style: "large" },
    { text: "Actuzaliaciones" },
    { text: "Conexión a la red" },
    { text: "Consultoría de negocios" },
    { text: "Preparación del proyecto" },
    { text: "Facturación" },
    { text: "Señalización" },
    { text: "Integraciones con sistemas propios", style: "large" },
    { text: "Mantenimiento Preventivo" },
    { text: "Rotación de certificados" },
    { text: "Viabilidad técnica" },
    { text: "Monitoreo de estado", style: "large" },
    { text: "Cambios de legislación" }
  ]

  const min = -12;
  const max = 12;

  const getRandomAngle = () => {
    return Math.round(Math.random() * (max - min) + min);
  };
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

    <div class="cards">
      {#each list as item, i}
        <div
          class="cards__wrap {item.style || ''}"
          data-aos="fade-down"
          data-aos-delay={i * 100}
          >
          <div
            class="cards__item"
            style="--rotate: {getRandomAngle()}deg"
            tabindex="0"
            >
            {item.text}
          </div>
        </div>
      {/each}
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

  .cards {
    max-width: calc(1024 / var(--ratio));;
    margin: 4rem auto;

    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;
    gap: 0;
  }

  @media (min-width: 600px) {
    .cards:hover > :not(:hover) {
      /* filter: blur(1px); */

      color: #666;
      background-color: #F1EEEC;
    }
  }

  .cards__wrap {
    position: relative;
    z-index: 1;
  }

  .cards__wrap:hover,
  .cards__wrap:focus {
    z-index: 2;
  }

  .cards__wrap.large .cards__item {

    @media (min-width: 600px) {
      padding: 1.25em 1.75em;
    }
  }

  .cards__item {
    --scale: 1;
    --rotate: 0deg;

    border: 1px solid currentColor;
    background-color: white;
    font-size: clamp(1.25rem, calc(24 / var(--ratio)), 3rem);
    font-weight: 500;
    line-height: 1.25;
    text-align: center;
    padding: 1em 1.5em;
    min-height: 3em;
    /* width: 100%; */
    max-width: 20rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 3rem;
    margin: 0 -.5em;
    flex: 1 1 auto;
    z-index: 1;
    position: relative;
    transform: rotate(var(--rotate)) scale(var(--scale));
    transition: all .2s;
  }

  .cards__item:hover,
  .cards__item:focus {
    --scale: 1.2;
    --rotate: 0 !important;

    z-index: 3;
  }
</style>