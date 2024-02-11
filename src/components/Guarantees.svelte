<script>
  import { _, isLoading } from "svelte-i18n";
  import Contact from "./Contact.svelte";
  import experience from "$lib/assets/svg/guarantees/great_experience.svg";
  import Guarantee from "./Guarantee.svelte";
  
</script>

{#if !$isLoading}
  <div class="container mx-auto">
    <h1 class="text-center">
      ¿Qué te garantizamos<br />al trabajar con Gaia?
    </h1>

    <div class="scroll-snap-slider">
      <Guarantee image={experience} 
        title={$_("nav.need", {
          default: "Why you need it",
        })}
        description={$_("nav.need", {
          default: "Why you need it",
        })}
      />
      <Guarantee image={experience} 
        title={$_("nav.need", {
          default: "Why you need it",
        })}
        description={$_("nav.need", {
          default: "Why you need it",
        })}
      />
      <Guarantee image={experience} 
        title={$_("nav.need", {
          default: "Why you need it",
        })}
        description={$_("nav.need", {
          default: "Why you need it",
        })}
      />
      <Guarantee image={experience} 
        title={$_("nav.need", {
          default: "Why you need it",
        })}
        description={$_("nav.need", {
          default: "Why you need it",
        })}
      />
      <Guarantee image={experience} 
        title={$_("nav.need", {
          default: "Why you need it",
        })}
        description={$_("nav.need", {
          default: "Why you need it",
        })}
      />
    </div>
    <Contact />
    <div>

    </div>
    <h1 class="text-center">
      ¿Aún tienes<br/>alguna duda?
    </h1>
    <div>
      
    </div>
  </div>
{/if}

<style lang="postcss">
  :root {
    --ratio: 1440 * 1vw * 100;
  }

  .scroll-snap-slider {
    display: flex;
    flex-wrap: nowrap;
    justify-content: normal;
    overflow-x: auto;
    padding-inline: 0;
    scroll-behavior: smooth;
    scroll-snap-stop: always;
    scroll-snap-type: x mandatory;
    gap: 20px;
    margin-block-end: 55px;
    margin-block-start: calc(22 / var(--ratio));
}
.scroll-snap-slider:not(.-show-scroll-bar) {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.scroll-snap-slider:not(.-show-scroll-bar)::-webkit-scrollbar {
  display: none;
}

  .container {
    width: calc(1280 / var(--ratio));
    margin-top: calc(33 / var(--ratio));
    margin-bottom: calc(105 / var(--ratio));
    padding: calc(65 / var(--ratio)) 0;
  }

  h1 {
    font-family: theme("fontFamily.serif");
    font-size: calc(48 / var(--ratio));
    font-weight: 300;
    line-height: calc(56 / var(--ratio));
    padding: calc(15 / var(--ratio));
  }
</style>
