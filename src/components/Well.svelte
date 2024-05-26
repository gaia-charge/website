<script>
  import { _, isLoading } from "svelte-i18n";
  import arrow_right from "$lib/assets/svg/arrow_right.svg";
</script>

{#if !$isLoading}
<section>
  <div
    class="root mt-6 section-evidence bg-medium-blue text-white flex flex-col"
  >
    <div>
      <p>
        {$_("whatForYou.evidence.uptitle", {
          default: "Cobramos una tarifa fija mensual por cargador",
        })}
      </p>
    </div>
    <h2>
      {$_("whatForYou.evidence.title", {
        default: "¡Para que sólo te centres en tu negocio!",
      })}
    </h2>
    <div class="flex flex-row gap-8 items-center what-for-m">
      <p>
        {$_("whatForYou.evidence.p1", {
          default: "Sin inversión inicial",
        })}
      </p>
      <span class="divider px-8 pr-8"
        ><p>
          {$_("whatForYou.evidence.p2", {
            default: "Tú eliges si quieres ofrecer carga gratuita o de pago",
          })}
        </p></span
      >
      <p>
        {$_("whatForYou.evidence.p3", {
          default: "Sin letra pequeña",
        })}
      </p>
    </div>
    <div class="submit flex">
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
</section>
{/if}

<style lang="postcss">
  :root {
    --ratio: 1440 * 1vw * 100;
  }

  .root {
    scroll-margin-block-start: calc(160 / var(--ratio));
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
  .section-evidence .divider {
    border-inline: 1px solid #65d45c;
    max-width: 280px;
    text-align: center;
  }
  .section-evidence h2 {
    font-family: theme("fontFamily.serif");
    font-size: calc(48 / var(--ratio));
    font-weight: 300;
    line-height: calc(56 / var(--ratio));
    color: theme("colors.green");
    max-width: 390px;
    text-align: center;
  }
  @media only screen and (max-width: 431px) {
  section {
    background-color: white;
    padding-block-start: 32px;
    padding-block-end: 32px;
  }
  .what-for-m {
    flex-direction: column;
  }
  .section-evidence .divider {
    border-block: 1px solid #65d45c;
    border-inline: none;
  }
}
</style>
