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
<Guarantees />
<Footer />

<style lang="postcss">
  :root {
    --ratio: 1440 * 1vw * 100;
  }
  :global(html) {
    scroll-behavior: smooth;
  }

</style>
