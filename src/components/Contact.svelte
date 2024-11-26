<script>
  import { onMount } from "svelte";
  import { _, isLoading } from "svelte-i18n";

  onMount(() => {
    const scriptId = 'pipedriveWebForms';
    const scriptElem = document.getElementById(scriptId);

    if (scriptElem) {
      scriptElem.remove();
    }

    const script = document.createElement('script');
    script.setAttribute('id', scriptId);
    script.setAttribute('src','https://webforms.pipedrive.com/f/loader');
    document.head.appendChild(script);
  })
</script>

{#if !$isLoading}
  <div id="contact"></div>
  <div class="contact bg-medium-blue text-white flex flex-row">
    <div class="info w-1/2 mt-6">
      <h2>
        {@html $_("contact.title", {
          default: "We are here for you",
        })}
      </h2>
      <p>
        {$_("contact.subtitle", {
          default:
            "Leave us your contact details and we will get in touch with you as soon as possible.",
        })}
      </p>
    </div>
    <div class="w-1/2 form-elements">
      <div
        class="pipedriveWebForms"
        data-pd-webforms="https://webforms.pipedrive.com/f/72moX2d3I5kKo6qKLYRPmCBRuSlQfrEVbV9IYYbZ8qljei7JSW8hIcBKlnfvgqgMGD"
      />
    </div>
  </div>
{/if}

<style lang="postcss">
  #contact {
    /* Offset the fixed nav */
    margin-top: calc(-110 / var(--ratio));
    height: calc(110 / var(--ratio));
  }

  .contact {
    padding: calc(65 / var(--ratio)) 0;
  }
  .info {
    padding-left: calc(195 / var(--ratio));
    padding-right: calc(65 / var(--ratio));
  }
  .info h2 {
    font-family: theme("fontFamily.serif");
    font-size: calc(48 / var(--ratio));
    font-weight: 300;
    line-height: calc(56 / var(--ratio));
    color: theme("colors.green");
  }
  .info p {
    font-size: calc(18 / var(--ratio));
    font-weight: 300;
    line-height: calc(28 / var(--ratio));
  }

  @media only screen and (max-width: 431px) {
    .contact {
      width: 100% !important;
      height: auto;
      display: flex;
      flex-direction: column;
      gap: 24px;
      padding-block-start: 24px !important;
      padding-block-end: 24px !important;
    }
    .info {
      padding-left: 0;
      width: 100%;
    }
    .info h2 {
      font-size: 39px;
      line-height: 48px;
    }

    .form-elements {
      width: 100%;
    }
  }
</style>
