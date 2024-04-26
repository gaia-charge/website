<script>
  import { _, isLoading } from "svelte-i18n";
  import Contact from "./Contact.svelte";
  import experience from "$lib/assets/svg/guarantees/great_experience.svg";
  import Guarantee from "./Guarantee.svelte";
  import SliderContent from "./common/SliderContent.svelte";
  import Accordion from "./common/Accordion.svelte";
  import arrow from "$lib/assets/svg/arrow.svg";
  
  export let contactStatus;

  let indexSlide = 0;
  export function left () {
    
    if(indexSlide > 0){
      indexSlide--;
      const w = document.getElementById('guarantee-slider').offsetWidth / 5;
      document.getElementById('guarantee-slider').scrollLeft -= w;
    }
	}
	
	export function right () {
    if(indexSlide < 4){
      indexSlide++;
      const w = document.getElementById('guarantee-slider').offsetWidth / 5;
      document.getElementById('guarantee-slider').scrollLeft += w;
    }
	}

</script>

{#if !$isLoading}
  <section class="container mx-auto" id="guarantees">
    <h1 class="text-center whitespace-pre-line">
      
      {$_("guarantees.title", {
        default: "¿Qué te garantizamos\nal trabajar con Gaia?",
      })}
    </h1>

    <div class="relative pl-4 pr-4">
      <div class="relative scroll-snap-slider" id="guarantee-slider">
        <Guarantee image={experience} 
          title={$_("guarantees.one.title", {
            default: "Why you need it",
          })}
          description={$_("guarantees.one.description", {
            default: "Why you need it",
          })}
        />
        <Guarantee image={experience} 
          title={$_("guarantees.two.title", {
            default: "Why you need it",
          })}
          description={$_("guarantees.two.description", {
            default: "Why you need it",
          })}
        />
        <Guarantee image={experience} 
          title={$_("guarantees.three.title", {
            default: "Why you need it",
          })}
          description={$_("guarantees.three.description", {
            default: "Why you need it",
          })}
        />
        <Guarantee image={experience} 
          title={$_("guarantees.four.title", {
            default: "Why you need it",
          })}
          description={$_("guarantees.four.description", {
            default: "Why you need it",
          })}
        />
        <Guarantee image={experience} 
          title={$_("guarantees.five.title", {
            default: "Why you need it",
          })}
          description={$_("guarantees.five.description", {
            default: "Why you need it",
          })}
        />

      </div>
      <button class="rounded left" on:click={left} aria-label="left">
        <img src={arrow} class="inline-block rotate-180" alt="Contacto" />
      </button>
      <button class="rounded right" on:click={right} aria-label="right">
        <img src={arrow} class="inline-block" alt="Contacto" />
      </button>
    </div>
    <Contact contactStatus={contactStatus}/>

    <div class=" flex justify-items-center w-full mt-11 mb-11">
      <SliderContent />
    </div>
    <h1 class="text-center whitespace-pre-line">
      {$_("guarantees.question", {
        default: "¿Aún tienes\nalguna duda?",
      })}
      
    </h1>
    <div class="accordion-container">
      <Accordion>
        <span slot="head">{$_("guarantees.accordion.first.head", {
          default: "First accordion",
        })}</span>
        <div slot="details">
          <p>
            {$_("guarantees.accordion.first.details", {
              default: "First Accordion details",
            })}
          </p>
        </div>
      </Accordion>
      <Accordion>
        <span slot="head">{$_("guarantees.accordion.second.head", {
          default: "Second accordion",
        })}</span>
        <div slot="details">
          <p>
            {$_("guarantees.accordion.second.details", {
              default: "Second Accordion details",
            })}
          </p>
        </div>
      </Accordion>
    </div>
  </section>
{/if}

<style lang="postcss">
  :root {
    --ratio: 1440 * 1vw * 100;
  }

  .rounded{
      top: calc( 50% - 24px );
      position: absolute;
      display:flex;
      align-items: center;
      justify-content: center;
      background-color: white;
      width: calc(48 / var(--ratio));
      height: calc(48 / var(--ratio));
      border-radius: 50%;
    }
    .right{
      right: -1%
    }
    .left{
      left: -1%
    }

  .accordion-container {
    display: flex;
    flex-direction: column;
    max-width: 864px;
    margin: auto;
    margin-block-start: 40px;
    margin-block-end: 40px;
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
