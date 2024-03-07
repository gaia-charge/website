<script>
  import { _, isLoading } from "svelte-i18n";
  import Nav from "../../components/Nav.svelte";
  import Hero from "../../components/Hero.svelte";
  import Partners from "../../components/Partners.svelte";
  import WhatWeDo from "../../components/WhatWeDo.svelte";
  import Contact from "../../components/Contact.svelte";
  import Guarantees from "../../components/Guarantees.svelte";
  import Footer from "../../components/Footer.svelte";
  import WhyYouNeedIt from "../../components/WhyYouNeedIt.svelte";
  import HowToStart from "../../components/HowToStart.svelte";
  import WhatForYou from "../../components/WhatForYou.svelte";
  import { onMount } from 'svelte';


  export let form;
  //let contactStatus = form?.contactStatus;
  $: contactStatus = form?.contactStatus;

  onMount(() => {
		console.log('the component has mounted');
    setTimeout(() => {
        const element = document.getElementById("contact");
        if( contactStatus ) element.scrollIntoView();
      }, 500);
    
	});
</script>

<svelte:head>
  <title>Gaia Charge</title>
</svelte:head>

<Nav />
<Hero />
<Partners />
<WhyYouNeedIt/>
<HowToStart/>
<WhatWeDo />
<WhatForYou />
<Guarantees contactStatus={contactStatus} />
<Footer />

<style lang="postcss">
  :root {
    --ratio: 1440 * 1vw * 100;
  }
  :global(html) {
    scroll-behavior: smooth;
  }

</style>
