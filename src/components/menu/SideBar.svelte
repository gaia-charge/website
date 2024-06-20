<script>
  import { _, isLoading } from "svelte-i18n";
  import { locale, locales } from "svelte-i18n";
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

      <a on:click={() => (open = !open)} href="#need" class="navigation"
        >{$_("nav.need", {
          default: "Why you need it",
        })}</a
      >
      <a on:click={() => (open = !open)} href="#start" class="navigation"
        >{$_("nav.start", {
          default: "How to start",
        })}</a
      >
      <a on:click={() => (open = !open)} href="#ourService" class="navigation"
        >{$_("nav.ourService", {
          default: "Our service",
        })}</a
      >
      <a on:click={() => (open = !open)} href="#benefits" class="navigation"
        >{$_("nav.benefits", {
          default: "Benefits",
        })}</a
      >
      <a on:click={() => (open = !open)} href="#guarantees" class="navigation"
        >{$_("nav.guarantees", {
          default: "Guarantees",
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
      font-weight: 600;
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
