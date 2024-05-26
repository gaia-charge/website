<script>
  import { locale, locales } from "svelte-i18n";
  import { _, isLoading } from "svelte-i18n";
  import logo from "$lib/assets/svg/logo.svg";
  import menuMobile from "$lib/assets/svg/mobile-menu.svg";
  import SideBar from './menu/SideBar.svelte';
    import Hamburger from './menu/Hamburger.svelte';

  export let sidebar = false

</script>



<nav class="fixed flex flex-row items-center justify-between z-50" class:sidebar>
  {#if !$isLoading}
  <SideBar bind:open={sidebar}/>
    <div class="mobile-view_p logo-container">
      <a href="/"><img src={logo} class="logo" alt="Gaia Charge logo" /></a>
    </div>
    <div class="flex md:hidden mobile-view_p" >
      <!-- <a href="/"><img src={menuMobile} class="menu" alt="Mobile Menu" /></a> -->
      <Hamburger bind:open={sidebar}/>
    </div>
    <div class=" hidden md:flex justify-center gap-4">
      <a
        href="#need"
        class="navigation">{$_("nav.need", {
          default: "Why you need it",
        })}</a
      >
      <a href="#start" class="navigation"
        >{$_("nav.start", {
          default: "How to start",
        })}</a
      >
      <a href="#ourService" class="navigation"
        >{$_("nav.ourService", {
          default: "Our service",
        })}</a
      >
      <a href="#benefits" class="navigation"
        >{$_("nav.benefits", {
          default: "Benefits",
        })}</a
      >
      <a href="#guarantees" class="navigation"
        >{$_("nav.guarantees", {
          default: "Guarantees",
        })}</a
      >
    </div>
    <div class=" hidden md:flex">
      <a
        href="#contact"
        class="contact text-green border-green rounded-full">{$_("contactBtn.cta", {
          default: "Contacto",
        })}</a
      >
    </div>
    <div class=" hidden md:flex">
      <p class=" w-12">
        <select class="select w-full" bind:value={$locale}>
          {#each $locales as locale}
            <option value={locale}>{locale}</option>
          {/each}
        </select>
      </p>
    </div>
  {/if}
</nav>

<style lang="postcss">
  :root {
    --ratio: 1440 * 1vw * 100;
  }
  select:focus-visible {
    outline: none;
  }

  .select {
    -webkit-appearance: none;
    -moz-appearance: none;
    background: transparent;
    background-image: url("/arrow.svg");
    background-repeat: no-repeat;
    background-position-x: 100%;
    background-position-y: 5px;
    font-size: 18px;
    font-weight: 700;
    line-height: 28px;
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

  .navigation {
    font-size: calc(18 / var(--ratio));
    line-height: calc(28 / var(--ratio));
    font-weight: 400;
    color: #044348;
    padding: calc(8 / var(--ratio));
  }
  .logo {
    width: calc(105 / var(--ratio));
  }
  .menu {
    width: calc(55 / var(--ratio));
  }
  .contact {
    font-size: calc(16 / var(--ratio));
    font-weight: 400;
    padding: calc(15 / var(--ratio));
    border-width: calc(2 / var(--ratio));
  }
  @media only screen and (max-width: 431px) {
  .logo {
    width: 87px;
    
  }
  nav {
    padding-block-start: 16px;
    padding-right: 0 !important;
  }
  .mobile-view_p {
    padding-block-start: 16px;
    z-index: 1;
  }
  .sidebar {
    padding-right: 0;
  }
  .sidebar .logo-container {
    margin-inline-start: auto;
    margin-inline-end: auto;
  }
}
</style>
