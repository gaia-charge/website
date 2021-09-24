<script>
  import { afterUpdate, beforeUpdate } from "svelte";
  import { useAckeeSapper } from "svelte-ackee";

  useAckeeSapper(
    beforeUpdate,
    afterUpdate,
    {
      server: import.meta.env.VITE_ACKEE_SERVER,
      domainId: import.meta.env.VITE_ACKEE_DOMAIN_ID,
    },
    {
      ignoreLocalhost: false,
      detailed: true,
    }
  );
</script>

<main>
  <slot />
</main>

<style>
  main {
    position: relative;
    background-color: white;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>
