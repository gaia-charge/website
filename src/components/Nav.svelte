<script>
  import { _, isLoading } from "svelte-i18n";
  import logo from "$lib/assets/svg/logo.svg";
</script>

<nav class="fixed flex flex-row items-center justify-between z-50">
  {#if !$isLoading}
    <div>
      <a href="/"><img src={logo} class="logo" alt="Gaia Charge logo" /></a>
    </div>
    <div>
      <a
        href="#contact"
        class="contact text-green border-green rounded-full">Contacto</a
      >
    </div>
  {/if}
</nav>

<style lang="postcss">
  :root {
    --ratio: 1440 * 1vw * 100;
  }

  nav {
    top: 0;
    right: 0;
    left: 0;
    padding-top: calc(44 / var(--ratio));
    padding-right: calc(192 / var(--ratio));
    padding-left: calc(192 / var(--ratio));
    padding-bottom: calc(66 / var(--ratio));

    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.9) 60%,
      rgba(255, 255, 255, 0) 100%
    );
  }
  .logo {
    width: calc(105 / var(--ratio));
  }
  .contact {
    font-size: calc(16 / var(--ratio));
    font-weight: 400;
    padding: calc(15 / var(--ratio));
    border-width: calc(2 / var(--ratio));
  }
</style>
