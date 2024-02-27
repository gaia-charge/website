<script>
  import { _, isLoading } from "svelte-i18n";

  import planning from "$lib/assets/svg/planning.svg";
  import line1 from "$lib/assets/svg/line1.svg";
  import installation from "$lib/assets/svg/installation.svg";
  import line2 from "$lib/assets/svg/line2.svg";
  import monitoring from "$lib/assets/svg/monitoring.svg";
  import line3 from "$lib/assets/svg/line3.svg";
  import maintenance from "$lib/assets/svg/maintenance.svg";
  import line4 from "$lib/assets/svg/line4.svg";
  import payments from "$lib/assets/svg/payments.svg";
  import arrow_right from "$lib/assets/svg/arrow_right.svg";
</script>

{#if !$isLoading}
<section>
  <div class="section-evidence bg-medium-blue text-white flex flex-col">
    <div><p>{$_("whatWeDo.evidence.uptitle", {
      default: "Cobramos una tarifa fija mensual por cargador",
    })}</p>
    </div>
    <h2>{$_("whatWeDo.evidence.title", {
      default: "¡Para que sólo te centres en tu negocio!",
    })}</h2>
    <div class="flex flex-row gap-8 items-center">
      <p>{$_("whatWeDo.evidence.p1", {
        default: "Sin inversión inicial",
      })}</p>
      <span class="divider px-8 pr-8"><p>{$_("whatWeDo.evidence.p2", {
        default: "Tú eliges si quieres ofrecer carga gratuita o de pago",
      })}</p></span>
      <p>{$_("whatWeDo.evidence.p3", {
        default: "Sin letra pequeña",
      })}</p>
    </div>
    <div class="submit flex">
      <button
        type="submit"
        class="contact ml-auto text-white bg-green border-green border-2 rounded-full flex items-center"
      >
      {$_("whatWeDo.evidence.cta", {
        default: "Contacto",
      })}
        <img src={arrow_right} class="inline-block" alt="Contacto" />
      </button>
    </div>
  </div>
</section>
{/if}

<style lang="postcss">
  :root {
    --ratio: 1440 * 1vw * 100;
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