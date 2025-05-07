<script>
  import { _, locale } from "svelte-i18n";
  import Nav from "../../components/Nav.svelte";
  import Hero from "../../components/Hero.svelte";
  import Partners from "../../components/Partners.svelte";
  import WhyYouNeedIt from "../../components/WhyYouNeedIt.svelte";
  import HowToStart from "../../components/HowToStart.svelte";
  import WhatWeDo from "../../components/WhatWeDo.svelte";
  import Well from "../../components/Well.svelte";
  import Benefits from "../../components/Benefits.svelte";
  import Guarantees from "../../components/Guarantees.svelte";
  import Contact from "../../components/Contact.svelte";
  import Testimonials from "../../components/Testimonials.svelte";
  import Footer from "../../components/Footer.svelte";

  $: canonicalUrl = `https://gaiacharge.com/${$locale}`;
</script>

<svelte:head>
  <title>Gaia Charge</title>
  <link rel="canonical" href={canonicalUrl} />
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
<Contact />
<Testimonials />
<Footer />
