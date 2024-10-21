<script>
  import "@/app.css";
  import "aos/dist/aos.css";

  import { browser } from '$app/environment';
  import AOS from "aos";
  import { onMount } from "svelte";

  import Analytics from "../components/Analytics.svelte";
  import { startClient } from "../services/i18n";
  import { _, locale } from "svelte-i18n";

  /** @type {import('./$types').PageData */
  export let data;
  let { initialLocale } = data;
  $: ({ initialLocale } = data);
  startClient(initialLocale);

  const scriptId = 'leadBoosterScript';

  let playbookUuid = null;
  let usedPipedriveLang = 'es';
  let pipedriveLeadboosterConfig = {};

  const pipedrivePlaybooks = {
    en: '175354b3-1285-4e5b-8111-90ad2f4ed4e4',
    es: 'f5a2b5df-6816-4267-84ab-514c0f729ce3',
  }

  $: {
    if ($locale !== usedPipedriveLang) {
      usedPipedriveLang = $locale;
    }

    playbookUuid = pipedrivePlaybooks[usedPipedriveLang];
    pipedriveLeadboosterConfig = {
      base: "leadbooster-chat.pipedrive.com",
      companyId: 13416493,
      playbookUuid: playbookUuid,
      version: 2,
    };

    if (browser && $locale !== null) {
      window.pipedriveLeadboosterConfig = pipedriveLeadboosterConfig;

      if (window.LeadBooster) {
        console.warn("LeadBooster already exists. We'll remove it.");
        deletePipedrive();
      }

      // add LeadBooster before loading script
      window.LeadBooster = {
        q: [],
        on: function (n, h) {
          this.q.push({ t: "o", n: n, h: h });
        },
        trigger: function (n) {
          this.q.push({ t: "t", n: n });
        },
      };

      loadPipedriveScript();
    }
  }

  const loadPipedriveScript = () => {
    const scriptElem = document.getElementById(scriptId);

    if (scriptElem) {
      scriptElem.remove();
    }

    const script = document.createElement('script');
    script.setAttribute('id', scriptId);
    script.setAttribute('src','https://leadbooster-chat.pipedrive.com/assets/loader.js');
    document.head.appendChild(script);
  }

  const deletePipedrive = () => {
    // remove iframe
    const containers = document.querySelectorAll('#LeadboosterContainer');
    Array.from(containers).forEach((el) => el.remove());

    // remove script
    const scriptElem = document.getElementById(scriptId);
    scriptElem.remove();

    delete window.LeadBooster;
  }

  onMount(() => {
    AOS.init();
  });
</script>

<main>
  <Analytics />
  <slot />
</main>

<style>
  main {
    position: relative;
  }
</style>
