<script>
  import { _, isLoading } from "svelte-i18n";
  import green_arrow_right from "$lib/assets/svg/green_arrow_right.svg";
</script>

{#if !$isLoading}
  <section class="root mt-6" id="benefits">
    <div class="for-you">
      <div class="container">
        <div class="title text-center mx-auto mb-10">
          <h1>
            {$_("whatForYou.title", {
              default: "¿Por qué te beneficias al trabajar con Gaia?",
            })}
          </h1>
        </div>
        <div class=" grid grid-cols-3 gap-16">
          <!-- 1 Card -->
          <div class="card">
            <div class="title">
              <h3>
                {$_("whatForYou.card1.title1", {
                  default: "Haz foco",
                })}
              </h3>
            </div>
            <div class="title flex gap-2 items-center">
              <img
                src={green_arrow_right}
                class="inline-block fill-green"
                alt="To"
              />
              <h3>
                {$_("whatForYou.card1.title2", {
                  default: "en tu negocio",
                })}
              </h3>
            </div>
            <p class=" mt-6">
              {$_("whatWeDo.card1.description", {
                default:
                  "Porque al no tener que ocuparte de nada mientras trabajemos juntos, puedes seguir haciendo foco en tu negocio",
              })}
            </p>
          </div>
          <!-- 2 Card -->
          <div class="card">
            <div class="title">
              <h3>
                {$_("whatForYou.card1.title1", {
                  default: "Haz foco",
                })}
              </h3>
            </div>
            <div class="title flex gap-2 items-center">
              <img
                src={green_arrow_right}
                class="inline-block fill-green"
                alt="To"
              />
              <h3>
                {$_("whatForYou.card1.title2", {
                  default: "en tu negocio",
                })}
              </h3>
            </div>
            <p class=" mt-6">
              {$_("whatWeDo.card1.description", {
                default:
                  "Porque al no tener que ocuparte de nada mientras trabajemos juntos, puedes seguir haciendo foco en tu negocio",
              })}
            </p>
          </div>
          <!-- 3 Card -->
          <div class="card">
            <div class="title">
              <h3>
                {$_("whatForYou.card1.title1", {
                  default: "Haz foco",
                })}
              </h3>
            </div>
            <div class="title flex gap-2 items-center">
              <img
                src={green_arrow_right}
                class="inline-block fill-green"
                alt="To"
              />
              <h3>
                {$_("whatForYou.card1.title2", {
                  default: "en tu negocio",
                })}
              </h3>
            </div>
            <p class=" mt-6">
              {$_("whatWeDo.card1.description", {
                default:
                  "Porque al no tener que ocuparte de nada mientras trabajemos juntos, puedes seguir haciendo foco en tu negocio",
              })}
            </p>
          </div>
          <!-- 4 Card -->
          <div class="card">
            <div class="title">
              <h3>
                {$_("whatForYou.card1.title1", {
                  default: "Haz foco",
                })}
              </h3>
            </div>
            <div class="title flex gap-2 items-center">
              <img
                src={green_arrow_right}
                class="inline-block fill-green"
                alt="To"
              />
              <h3>
                {$_("whatForYou.card1.title2", {
                  default: "en tu negocio",
                })}
              </h3>
            </div>
            <p class=" mt-6">
              {$_("whatForYou.card1.description", {
                default:
                  "Porque al no tener que ocuparte de nada mientras trabajemos juntos, puedes seguir haciendo foco en tu negocio",
              })}
            </p>
          </div>
          <!-- 5 Card -->
          <div class="card">
            <div class="title">
              <h3>
                {$_("whatForYou.card1.title1", {
                  default: "Haz foco",
                })}
              </h3>
            </div>
            <div class="title flex gap-2 items-center">
              <img
                src={green_arrow_right}
                class="inline-block fill-green"
                alt="To"
              />
              <h3>
                {$_("whatForYou.card1.title2", {
                  default: "en tu negocio",
                })}
              </h3>
            </div>
            <p class=" mt-6">
              {$_("whatForYou.card1.description", {
                default:
                  "Porque al no tener que ocuparte de nada mientras trabajemos juntos, puedes seguir haciendo foco en tu negocio",
              })}
            </p>
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

  .root {
    scroll-margin-block-start: calc(160 / var(--ratio));
  }

  .card {
    max-width: 280px;
  }
  .card .title h3 {
    font-family: "Neue Haas Grotesk Display Pro";
    font-size: calc(32 / var(--ratio));
    line-height: calc(40 / var(--ratio));
    font-weight: 400;
  }

  .card p {
    font-family: "Neue Haas Grotesk Display Pro";
    font-size: calc(18 / var(--ratio));
    line-height: calc(28 / var(--ratio));
    font-weight: 400;
    color: #6c6c6c;
  }

  .for-you {
    background-color: white;
  }
  .for-you .container {
    max-width: calc(1008 / var(--ratio));
    margin-inline-start: auto;
    margin-inline-end: auto;
    padding-block-start: calc(32 / var(--ratio));
    padding-block-end: calc(53 / var(--ratio));
  }
  .for-you .title {
    width: calc(540 / var(--ratio));
  }

  .for-you .title h1 {
    font-family: theme("fontFamily.serif");
    font-size: calc(48 / var(--ratio));
    line-height: calc(56 / var(--ratio));
    font-weight: 400;
  }
</style>
