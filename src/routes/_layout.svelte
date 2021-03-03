<script>
  import { afterUpdate, beforeUpdate } from "svelte";
  import { useAckeeSapper } from "svelte-ackee";
  import { stores } from "@sapper/app";

  const { session } = stores();

  session.subscribe((value) => {
    const { ACKEE_SERVER, ACKEE_DOMAIN_ID } = value;

    useAckeeSapper(
      beforeUpdate,
      afterUpdate,
      {
        server: ACKEE_SERVER,
        domainId: ACKEE_DOMAIN_ID,
      },
      {
        ignoreLocalhost: false,
        detailed: true,
      }
    );
  });

  export let segment;
</script>

<main {segment}>
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
