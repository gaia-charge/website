<script>
  import { _, isLoading } from "svelte-i18n";
  import green_arrow_right from "$lib/assets/svg/green_arrow_right.svg";
</script>

{#if !$isLoading}
  <!-- 1 Card -->
  <div class="card">
    <div class="title">
      <h3>
        {$_("whatForYou.card1.title1", {
          default: "You focus on",
        })}
      </h3>
    </div>
    <div class="title flex gap-2 items-center">
      <img
        src={green_arrow_right}
        class="inline-block fill-green"
        alt="Arrow"
      />
      <h3>
        {$_("whatForYou.card1.title2", {
          default: "your business",
        })}
      </h3>
    </div>
    <p class=" mt-6">
      {$_("whatWeDo.card1.description", {
        default:
          "We take care of everything and we're resolving any issue before it reaches you.",
      })}
    </p>
  </div>
  <!-- 2 Card -->
  <div class="card">
    <div class="title">
      <h3>
        {$_("whatForYou.card2.title1", {
          default: "You don't need to",
        })}
      </h3>
    </div>
    <div class="title flex gap-2 items-center">
      <img src={green_arrow_right} class="inline-block fill-green" alt="To" />
      <h3>
        {$_("whatForYou.card2.title2", {
          default: "invest anything",
        })}
      </h3>
    </div>
    <p class=" mt-6">
      {$_("whatWeDo.card2.description", {
        default:
          "Our flexible renting model turns all CAPEX into OPEX and allows you to have the best technology without any upfront investment.",
      })}
    </p>
  </div>
  <!-- 3 Card -->
  <div class="card">
    <div class="title">
      <h3>
        {$_("whatForYou.card3.title1", {
          default: "You keep the",
        })}
      </h3>
    </div>
    <div class="title flex gap-2 items-center">
      <img src={green_arrow_right} class="inline-block fill-green" alt="To" />
      <h3>
        {$_("whatForYou.card3.title2", {
          default: "control",
        })}
      </h3>
    </div>
    <p class=" mt-6">
      {$_("whatWeDo.card3.description", {
        default:
          "You decide on pricing, location, branding, and everything else important to you. We just make sure everything is working as it should.",
      })}
    </p>
  </div>
  <!-- 4 Card -->
  <div class="card">
    <div class="title">
      <h3>
        {$_("whatForYou.card4.title1", {
          default: "You are ready for",
        })}
      </h3>
    </div>
    <div class="title flex gap-2 items-center">
      <img src={green_arrow_right} class="inline-block fill-green" alt="To" />
      <h3>
        {$_("whatForYou.card4.title2", {
          default: "the future",
        })}
      </h3>
    </div>
    <p class=" mt-6">
      {$_("whatForYou.card4.description", {
        default:
          "Electromobility market is evolving very fast. We make sure you are always up to date with the latest technology.",
      })}
    </p>
  </div>
  <!-- 5 Card -->
  <div class="card">
    <div class="title">
      <h3>
        {$_("whatForYou.card5.title1", {
          default: "You are the",
        })}
      </h3>
    </div>
    <div class="title flex gap-2 items-center">
      <img src={green_arrow_right} class="inline-block fill-green" alt="To" />
      <h3>
        {$_("whatForYou.card5.title2", {
          default: "leader",
        })}
      </h3>
    </div>
    <p class=" mt-6">
      {$_("whatForYou.card5.description", {
        default:
          "Getting ahead of the competition is not easy. We make sure you are always one step ahead.",
      })}
    </p>
  </div>
{/if}

<style lang="postcss">
  :root {
    --ratio: 1440 * 1vw * 100;
  }
  .card {
    max-width: 280px;
  }
  .card .title h3 {
    font-family: "Neue Haas Grotesk Display Pro";
    font-size: calc(30 / var(--ratio));
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

  .mobile {
    display: none;
  }
  @media only screen and (max-width: 431px) {
    .no-mobile {
      display: none;
    }
    .mobile {
      display: block;
    }
    .card {
      background-color: #f1eeec;
      border-radius: 20px;
      max-width: none;
      padding: 24px 42px;
      scroll-snap-align: start;
    }
    .card .title h3 {
      font-size: 32px;
      line-height: 40px;
    }

    .card p {
      font-size: 18px;
      line-height: 28px;
    }
  }
</style>
