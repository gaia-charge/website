<script>
  import { _, isLoading } from "svelte-i18n";
  import Nav from "../components/Nav.svelte";
  import Hero from "../components/Hero.svelte";
  import Partners from "../components/Partners.svelte";
  import WhyYouNeedIt from "../components/WhyYouNeedIt.svelte";
  import HowToStart from "../components/HowToStart.svelte";
  import WhatWeDo from "../components/WhatWeDo.svelte";
  import Well from "../components/Well.svelte";
  import Benefits from "../components/Benefits.svelte";
  import Guarantees from "../components/Guarantees.svelte";
  import Contact from "../components/Contact.svelte";
  import Testimonials from "../components/Testimonials.svelte";
  import FAQ from "../components/FAQ.svelte";
  import Footer from "../components/Footer.svelte";
  import { onMount } from "svelte";

  export let form;
  //let contactStatus = form?.contactStatus;
  $: contactStatus = form?.contactStatus;

  onMount(() => {
    console.log("the component has mounted");

    setTimeout(() => {
      const element = document.getElementById("contact");
      if (contactStatus) element.scrollIntoView({ behavior: "instant" });
    }, 500);
  });
</script>

<svelte:head>
  <title>Gaia Charge</title>
</svelte:head>

<Nav />
<Hero />
<Partners />
<WhyYouNeedIt />
<HowToStart />
<WhatWeDo />
<Well />
<Benefits />
<Guarantees />
<Contact {contactStatus} />
<Testimonials />
<Footer />
