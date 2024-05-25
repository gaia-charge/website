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
    background-color: #F1EEEC;
    border-radius: 20px;
    max-width: none;
    padding: 24px 42px;
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
