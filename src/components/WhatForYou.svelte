<script>
  import { _, isLoading } from "svelte-i18n";
  import arrow_right from "$lib/assets/svg/arrow_right.svg";
  import green_arrow_right from "$lib/assets/svg/green_arrow_right.svg"
</script>

{#if !$isLoading}
<section id="ourService">
  <div class="section-evidence bg-medium-blue text-white flex flex-col">
    <div><p>{$_("whatForYou.evidence.uptitle", {
      default: "Cobramos una tarifa fija mensual por cargador",
    })}</p>
    </div>
    <h2>{$_("whatForYou.evidence.title", {
      default: "¡Para que sólo te centres en tu negocio!",
    })}</h2>
    <div class="flex flex-row gap-8 items-center">
      <p>{$_("whatForYou.evidence.p1", {
        default: "Sin inversión inicial",
      })}</p>
      <span class="divider px-8 pr-8"><p>{$_("whatForYou.evidence.p2", {
        default: "Tú eliges si quieres ofrecer carga gratuita o de pago",
      })}</p></span>
      <p>{$_("whatForYou.evidence.p3", {
        default: "Sin letra pequeña",
      })}</p>
    </div>
    <div class="submit flex">
      <button
        type="submit"
        class="contact ml-auto text-white bg-green border-green border-2 rounded-full flex items-center"
      >
      {$_("whatForYou.evidence.cta", {
        default: "Contacto",
      })}
        <img src={arrow_right} class="inline-block" alt="Contacto" />
      </button>
    </div>
  </div>
  <div class="for-you">
    <div class="container">
      <div class="title text-center mx-auto mb-10">
        <h1>{$_("whatWeDo.title", {
          default: "¿Por qué te beneficias al trabajar con Gaia?",
        })}</h1>
      </div>
      <div class=" grid grid-cols-3 gap-16">
        <!-- 1 Card -->
        <div class="card">
          <div class="title">
            <h3>{$_("whatWeDo.card1.title1", {
              default: "Haz foco",
            })}</h3></div>
          <div class="title flex gap-2 items-center">
            <img src={green_arrow_right} class="inline-block fill-green" alt="To" />
            <h3>{$_("whatWeDo.card1.title2", {
              default: "en tu negocio",
            })}</h3></div>
          <p class=" mt-6">{$_("whatWeDo.card1.description", {
            default: "Porque al no tener que ocuparte de nada mientras trabajemos juntos, puedes seguir haciendo foco en tu negocio",
          })}</p>
        </div>
        <!-- 2 Card -->
        <div class="card">
          <div class="title">
            <h3>{$_("whatWeDo.card1.title1", {
              default: "Haz foco",
            })}</h3></div>
          <div class="title flex gap-2 items-center">
            <img src={green_arrow_right} class="inline-block fill-green" alt="To" />
            <h3>{$_("whatWeDo.card1.title2", {
              default: "en tu negocio",
            })}</h3></div>
          <p class=" mt-6">{$_("whatWeDo.card1.description", {
            default: "Porque al no tener que ocuparte de nada mientras trabajemos juntos, puedes seguir haciendo foco en tu negocio",
          })}</p>
        </div>
        <!-- 3 Card -->
        <div class="card">
          <div class="title">
            <h3>{$_("whatWeDo.card1.title1", {
              default: "Haz foco",
            })}</h3></div>
          <div class="title flex gap-2 items-center">
            <img src={green_arrow_right} class="inline-block fill-green" alt="To" />
            <h3>{$_("whatWeDo.card1.title2", {
              default: "en tu negocio",
            })}</h3></div>
          <p class=" mt-6">{$_("whatWeDo.card1.description", {
            default: "Porque al no tener que ocuparte de nada mientras trabajemos juntos, puedes seguir haciendo foco en tu negocio",
          })}</p>
        </div>
        <!-- 4 Card -->
        <div class="card">
          <div class="title">
            <h3>{$_("whatWeDo.card1.title1", {
              default: "Haz foco",
            })}</h3></div>
          <div class="title flex gap-2 items-center">
            <img src={green_arrow_right} class="inline-block fill-green" alt="To" />
            <h3>{$_("whatWeDo.card1.title2", {
              default: "en tu negocio",
            })}</h3></div>
          <p class=" mt-6">{$_("whatWeDo.card1.description", {
            default: "Porque al no tener que ocuparte de nada mientras trabajemos juntos, puedes seguir haciendo foco en tu negocio",
          })}</p>
        </div>
        <!-- 5 Card -->
        <div class="card">
          <div class="title">
            <h3>{$_("whatWeDo.card1.title1", {
              default: "Haz foco",
            })}</h3></div>
          <div class="title flex gap-2 items-center">
            <img src={green_arrow_right} class="inline-block fill-green" alt="To" />
            <h3>{$_("whatWeDo.card1.title2", {
              default: "en tu negocio",
            })}</h3></div>
          <p class=" mt-6">{$_("whatWeDo.card1.description", {
            default: "Porque al no tener que ocuparte de nada mientras trabajemos juntos, puedes seguir haciendo foco en tu negocio",
          })}</p>
        </div>
      </div>
    </div>

  </div>
</section>
{/if}

<style lang="postcss">
  :root {
    --ratio: 1440 * 1vw * 100;
  }

  .card{
    max-width: 280px;
  }
  .card .title h3 {
    font-family: theme("fontFamily.serif");
    font-size: calc(32 / var(--ratio));
    line-height: calc(40 / var(--ratio));
    font-weight: 500;
  }

  .card p {
    font-family: theme("fontFamily.serif");
    font-size: calc(18 / var(--ratio));
    line-height: calc(28 / var(--ratio));
    font-weight: 400;
  }

  .for-you{
    background-color: white;
    
  }
  .for-you .container{
    max-width: calc( 1008 / var(--ratio));
    margin-inline-start: auto;
    margin-inline-end: auto;
    padding-block-start: calc( 32 / var(--ratio));
    padding-block-end: calc( 53 / var(--ratio));
  }
  .for-you .title{
    width: calc(540 / var(--ratio));
    
  }

  .for-you .title h1 {
    font-family: theme("fontFamily.serif");
    font-size: calc(48 / var(--ratio));
    line-height: calc(56 / var(--ratio));
    font-weight: 400;
  }
  .submit {
    width: auto;
  }

  .contact {
    font-size: calc(16 / var(--ratio));
    font-weight: 400;
    padding: calc(15 / var(--ratio)) calc(20 / var(--ratio));
    width: calc(191 / var(--ratio));
    margin-top: calc(30 / var(--ratio));
    justify-content: space-around;
  }
  .section-evidence {
    height: auto;
    justify-content: center;
    align-items: center;
    max-width: 1057px;
    width: calc(1280 / var(--ratio));
    margin-block-start: calc(80 / var(--ratio));
    margin-block-end: calc(80 / var(--ratio));
    margin-top: calc(80 / var(--ratio));
    margin-left: auto;
    margin-right: auto;
    padding: calc(65 / var(--ratio)) 0;
    border-radius: 12px;
    gap: 50px;
  }
  .section-evidence .divider{
    border-inline: 1px solid #65D45C;
    max-width: 280px;
    text-align: center;
  }
  .section-evidence  h2 {
    font-family: theme("fontFamily.serif");
    font-size: calc(48 / var(--ratio));
    font-weight: 300;
    line-height: calc(56 / var(--ratio));
    color: theme("colors.green");
    max-width: 390px;
    text-align: center;
  }
  </style>