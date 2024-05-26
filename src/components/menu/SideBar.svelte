<script>
     import { _, isLoading } from "svelte-i18n";
     import { locale, locales } from "svelte-i18n";
	export let open = false

</script>

<aside class="pt-4 absolute w-full h-screen top-0 bg-[#044348] shadow-lg" class:open>
    {#if !$isLoading}
	<nav class="p-12 text-xl flex flex-col justify-center items-center gap-5">

        <div class="flex gap-5 mb-11">
            {#each $locales as loc}
                <p
                class={loc === $locale ? "active" : ""}
                on:click={() => ($locale = loc)}
                >{loc}</p>
            {/each}
        </div>

		<a
        on:click={() => open = !open}
        href="#need"
        class="navigation">{$_("nav.need", {
          default: "Why you need it",
        })}</a
      >
      <a on:click={() => open = !open} href="#start" class="navigation"
        >{$_("nav.start", {
          default: "How to start",
        })}</a
      >
      <a on:click={() => open = !open} href="#ourService" class="navigation"
        >{$_("nav.ourService", {
          default: "Our service",
        })}</a
      >
      <a on:click={() => open = !open} href="#benefits" class="navigation"
        >{$_("nav.benefits", {
          default: "Benefits",
        })}</a
      >
      <a on:click={() => open = !open} href="#guarantees" class="navigation"
        >{$_("nav.guarantees", {
          default: "Guarantees",
        })}</a
      >
	</nav>
    {/if}
</aside>

<style>
   
    .active {
        color: #65D45C;
        border-bottom: 1px solid #65D45C;
    }
	aside {
		left: -101%;
		transition: left 0.3s ease-in-out;
	}
	nav {
        font-family: New Spirit;
        margin-block-start: 20%;
        font-size: 28px;
        line-height: 44px;
        font-weight: 600;
        color: white;
    }
	.open {
		left: 0
	}
    p {
        font-family: Neue Haas Grotesk Display Pro;
        font-size: 28px !important;
        font-weight: 400;
        line-height: 32px !important;
        text-align: center;

    }
</style>