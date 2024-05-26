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
</script>

{#if !$isLoading}
  <section class="root relative" id="ourService">
    <div class="title text-center mx-auto whitespace-pre-line">
      <h1>
        {@html $_("whatWeDo.title", {
          default: "How is our service <em>different</em>?",
        })}
      </h1>
      <p class="whitespace-pre-line">
        {@html $_("whatWeDo.description", {
          default:
            "Simply put: <em>we take care of everything</em>. We are the single provider of EV charging solutions you need.",
        })}
      </p>
    </div>

    <div class="planning whitespace-pre-line">
      <img src={planning} class="absolute" alt="Planeamos" />
      <div class="description absolute">
        <h3>
          {$_("whatWeDo.planning.title", {
            default: "Planeamos",
          })}
        </h3>
        <p>
          {$_("whatWeDo.planning.description", {
            default:
              "Preparamos todos los proyectos y la documentación necesaria. Todo de\nacuerdo con las leyes locales.",
          })}
        </p>
      </div>
    </div>

    <img src={line1} class="line1 absolute left-road_1" alt="Linea" />

    <div class="installation">
      <div class="description absolute whitespace-pre-line">
        <h3>
          {$_("whatWeDo.installation.title", {
            default: "Instalamos",
          })}
        </h3>
        <p>
          {$_("whatWeDo.installation.description", {
            default:
              "Cubrimos todos los costes de la instalación y los equipos de recarga\nnecesarios.",
          })}
        </p>
      </div>
      <img src={installation} class="absolute" alt="Instalamos" />
    </div>

    <img src={line2} class="line2 absolute right-road_1" alt="Linea" />

    <div class="monitoring">
      <img src={monitoring} class="absolute" alt="Monitorizamos" />
      <div class="description absolute whitespace-pre-line">
        <h3>
          {$_("whatWeDo.monitoring.title", {
            default: "Monitorizamos",
          })}
        </h3>
        <p>
          {$_("whatWeDo.monitoring.description", {
            default:
              "Una vez que los cargadores están operativos, los monitoreamos los 365\ndías del año, las 24 hs y enviamos personal cuando surge algún problema.",
          })}
        </p>
      </div>
    </div>

    <img src={line3} class="line3 absolute left-road_3" alt="Linea" />

    <div class="maintenance">
      <img src={maintenance} class="absolute" alt="Mantenemos" />
      <div class="description absolute whitespace-pre-line">
        <h3>
          {$_("whatWeDo.maintenance.title", {
            default: "Mantenemos",
          })}
        </h3>
        <p>
          {$_("whatWeDo.maintenance.description", {
            default:
              "Nos aseguramos de que los cargadores estén disponibles y visibles en las\nprincipales aplicaciones de navegación y de que estén actualizados ante\ncualquier nueva legislación.",
          })}
        </p>
      </div>
    </div>

    <img src={line4} class="line4 absolute right-road_4" alt="Linea" />

    <div class="payments">
      <img src={payments} class="absolute" alt="Facturamos" />
      <div class="description absolute whitespace-pre-line">
        <h3>
          {$_("whatWeDo.payments.title", {
            default: "Facturamos",
          })}
        </h3>
        <p>
          {$_("whatWeDo.payments.description", {
            default:
              "Nos aseguramos de que a los usuarios se les cobra correctamente y de que\nsus ingresos lleguen a tiempo.",
          })}
        </p>
      </div>
    </div>
  </section>
{/if}

<style lang="postcss">
  :root {
    --ratio: 1440 * 1vw * 100;
  }

  .root {
    height: calc(1520 / var(--ratio));
    margin-top: calc(50 / var(--ratio));
    margin-bottom: calc(32 / var(--ratio));
    scroll-margin-block-start: calc(160 / var(--ratio));
  }

  .title {
    width: calc(480 / var(--ratio));
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

  @media only screen and (max-width: 431px) {
    section {
      scroll-margin-block-start: 8rem !important;
    }
  .title {
    width: 80%;
  }
  img {
    position: static;
    width: 70% !important;
    margin-inline-start: auto;
    margin-inline-end: auto;
  }
  .description{
    position: static;
    margin-inline-start: auto;
    margin-inline-end: auto;
  }
  .root {
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
  .description {
    background-color: transparent;
    padding: calc(30 / var(--ratio));
    border-radius: calc(30 / var(--ratio));
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    padding: 0;
    width: 70% !important;
    margin-block-start: -20px;
  }
  .description h3 {
    font-size: 18px;
    line-height: 28px;
    color: #0D2823;
  }

  .description p {
    font-size: 14px !important;
    line-height: 24px !important;
    color: #6C6C6C;
    text-align: center;
  }
  .installation {
    display: flex;
    flex-direction: column-reverse;
  }
  .left-road_1 {
            transform: rotate(-106deg) translateY(-167%) scale(0.7) scaleY(1.5);
  }
  .left-road_3 {
    transform: rotate(-95deg) translateY(-125px) scale(.7) scaleY(1.5);
  }
  .right-road_1 {
        transform: rotate(125deg) translateY(-25%) scale(.7) translateX(-87px) scaleY(1.5);
  }
  .right-road_4 {
    transform: rotate(97deg) translateY(-128px) scale(.7) scaleY(1.5);
  }
}
</style>
