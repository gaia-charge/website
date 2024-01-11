<script>
  import { _, isLoading } from "svelte-i18n";
  import Nav from "../components/Nav.svelte";
  import Hero from "../components/Hero.svelte";
  import Partners from "../components/Partners.svelte";
  import WhatWeDo from "../components/WhatWeDo.svelte";
  import Contact from "../components/Contact.svelte";
  import Guarantees from "../components/Guarantees.svelte";
</script>

<svelte:head>
  <title>Gaia Charge</title>
</svelte:head>

<Nav />
<Hero />
<Partners />
<WhatWeDo />
<Contact />
<Guarantees />

<style lang="postcss">
  :root {
    --ratio: 1440 * 1vw * 100;
  }
</style>
