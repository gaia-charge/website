<script>
  import { _, isLoading } from "svelte-i18n";

  import Accordion from "./common/Accordion.svelte";
</script>

{#if !$isLoading}
  <section class="container mx-auto">
    <h1 class="text-center whitespace-pre-line">
      {$_("guarantees.question", {
        default: "¿Aún tienes\nalguna duda?",
      })}
    </h1>
    <div class="accordion-container">
      <Accordion>
        <span slot="head"
          >{$_("guarantees.accordion.first.head", {
            default: "First accordion",
          })}</span
        >
        <div slot="details">
          <p>
            {$_("guarantees.accordion.first.details", {
              default: "First Accordion details",
            })}
          </p>
        </div>
      </Accordion>
      <Accordion>
        <span slot="head"
          >{$_("guarantees.accordion.second.head", {
            default: "Second accordion",
          })}</span
        >
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
  .accordion-container {
    display: flex;
    flex-direction: column;
    max-width: 864px;
    margin: auto;
    margin-block-start: 40px;
    margin-block-end: 40px;
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
