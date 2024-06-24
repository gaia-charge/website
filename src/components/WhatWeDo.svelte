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
      <img
        src={planning}
        class="absolute"
        alt={$_("whatWeDo.planning.title", {
          default: "Planning",
        })}
      />
      <div class="description absolute">
        <h3>
          {$_("whatWeDo.planning.title")}
        </h3>
        <p>
          {$_("whatWeDo.planning.description", {
            default:
              "We prepare all necessary projects and documentation. All in accordance with local laws.",
          })}
        </p>
      </div>
    </div>

    <img src={line1} class="line1 absolute left-road_1" alt="Linea" />

    <div class="installation">
      <div class="description absolute whitespace-pre-line">
        <h3>
          {$_("whatWeDo.installation.title", {
            default: "Installation",
          })}
        </h3>
        <p>
          {$_("whatWeDo.installation.description", {
            default:
              "We do the complete installation, including integration with existing wiring.",
          })}
        </p>
      </div>
      <img
        src={installation}
        class="absolute"
        alt={$_("whatWeDo.installation.title")}
      />
    </div>

    <img src={line2} class="line2 absolute right-road_1" alt="Linea" />

    <div class="monitoring">
      <img
        src={monitoring}
        class="absolute"
        alt={$_("whatWeDo.monitoring.title", {
          default: "Monitoring",
        })}
      />
      <div class="description absolute whitespace-pre-line">
        <h3>
          {$_("whatWeDo.monitoring.title")}
        </h3>
        <p>
          {$_("whatWeDo.monitoring.description", {
            default:
              "Once the charge points are operational, we monitor them 365 days a year, 24/7 and send personnel before any problems arise.",
          })}
        </p>
      </div>
    </div>

    <img src={line3} class="line3 absolute left-road_3" alt="Linea" />

    <div class="maintenance">
      <img
        src={maintenance}
        class="absolute"
        alt={$_("whatWeDo.maintenance.title", {
          default: "Maintenance",
        })}
      />
      <div class="description absolute whitespace-pre-line">
        <h3>
          {$_("whatWeDo.maintenance.title")}
        </h3>
        <p>
          {$_("whatWeDo.maintenance.description", {
            default:
              "We ensure that chargers are available and visible in all major shipping applications and that they are up to date with any new legislation.",
          })}
        </p>
      </div>
    </div>

    <img src={line4} class="line4 absolute right-road_4" alt="Linea" />

    <div class="payments">
      <img
        src={payments}
        class="absolute"
        alt={$_("whatWeDo.payments.title", {
          default: "Payments",
        })}
      />
      <div class="description absolute whitespace-pre-line">
        <h3>
          {$_("whatWeDo.payments.title")}
        </h3>
        <p>
          {$_("whatWeDo.payments.description", {
            default:
              "We ensure that users are charged correctly and that their revenues arrive to you on time.",
          })}
        </p>
      </div>
    </div>
  </section>
{/if}

<style lang="postcss">
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
    .description {
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
      color: #0d2823;
    }

    .description p {
      font-size: 14px !important;
      line-height: 24px !important;
      color: #6c6c6c;
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
      transform: rotate(-100deg) translateY(-146px) translateX(-9%) scale(0.7)
        scaleY(1.5);
    }
    .right-road_1 {
      transform: rotate(125deg) translateY(-42%) scale(0.7) translateX(-70px)
        scaleY(1.5);
    }
    .right-road_4 {
      transform: rotate(97deg) translateY(-128px) scale(0.7) scaleY(1.5);
    }
  }
</style>
