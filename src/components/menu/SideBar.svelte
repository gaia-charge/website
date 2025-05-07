<script>
  import { _, isLoading, locale, locales } from "svelte-i18n";
  export let open = false;
</script>

<aside
  class="pt-4 absolute w-full h-screen top-0 bg-[#044348] shadow-lg"
  class:open
>
  {#if !$isLoading}
    <nav class="p-12 text-xl flex flex-col justify-center items-center gap-5">
      <div class="flex gap-5 mb-11">
        {#each $locales as loc}
          <button
            type="text"
            class="menu-lang"
            class:active={loc === $locale}
            on:click={() => ($locale = loc)}
          >
            {loc}
          </button>
        {/each}
      </div>

      <a on:click={() => (open = !open)} href="/{$locale}/#ourService" class="navigation"
        >{$_("nav.ourService", {
          default: "Our service",
        })}</a
      >
      <a on:click={() => (open = !open)} href="/{$locale}/#benefits" class="navigation"
        >{$_("nav.benefits", {
          default: "Benefits",
        })}</a
      >
      <a on:click={() => (open = !open)} href="/{$locale}/app" class="navigation"
        >{$_("nav.app", {
          default: "App",
        })}</a
      >
      <a on:click={() => (open = !open)} href="https://invest.gaiacharge.com/?utm_source=gaiacharge&utm_medium=website" class="navigation"
        >{$_("nav.invest", {
          default: "Invest",
        })}</a
      >
      <a on:click={() => (open = !open)} href="/{$locale}/#contact" class="navigation"
        >{$_("contactBtn.cta", {
          default: "Contacto",
        })}</a
      >
    </nav>
  {/if}
</aside>

<style>
  aside {
    left: -101%;
    transition: left 0.3s ease-in-out;
  }

  nav {
    margin-block-start: 20%;
    line-height: 1.6;
    color: white;

    a {
      font-family: theme(fontFamily.serif);
      font-size: 1.75rem;
      font-weight: 300;
    }
  }

  .open {
    left: 0;
  }

  .menu-lang {
    font-family: theme(fontFamily.sans);
    font-size: 1.125rem;
    font-weight: 400;
    text-align: center;
    text-transform: uppercase;
    border-block-end: 1px solid transparent;
    transition: all 0.2s;

    &.active {
      color: theme(colors.green);
      font-weight: 700;
      border-block-end-color: currentColor;
    }
  }
</style>
