<script lang="ts">
  import { onMount, onDestroy } from "svelte";

  const isDev = import.meta.env.DEV;

  export let portalId: string,
    formId: string | number,
    submitText = "Submit",
    region = "na1";

  const targetElementID = `form-${formId}`;

  onMount(() => {
    if (isDev) console.log(`component:HubspotFormSvelte ${formId} mounted`);
    handleCreateForm();
  });

  const handleCreateForm = () => {
    //@ts-ignore
    if (window.hbspt) {
      //@ts-ignore
      hbspt.forms.create({
        region,
        portalId,
        formId,
        submitText,
        target: "#" + targetElementID,
        css: "", //undocumented but required for iframe styling
      });
    }
  };

  onDestroy(() => {
    if (isDev) console.log(`component:HubspotFormSvelte ${formId} destroyed`);
  });
</script>

<svelte:head>
  <script
    src="//js.hsforms.net/forms/embed/v2.js"
  ></script>
</svelte:head>

<div id={targetElementID} class="base-hubspot-form" />
