<script>
  import { _, isLoading } from "svelte-i18n";
	import footer from "$lib/assets/svg/footer/footer.svg";
</script>

{#if !$isLoading}
  <div class="w-full relative">
    <img
      src={footer}
      class="illustration w-full absolute z-0"
      alt="Gaia Charge illustration"
    />
    <div class="headline absolute z-40 text-center w-full top-64">
      <h1 class="title text-center">
        {$_("footer.title", {
          default: "Síguenos en",
        })}
        
      </h1>
      <div class=" flex justify-center gap-4">
        <a
          href="#need"
          class="socials">{$_("nav.need", {
            default: "Linkedin",
          })}</a
        >
        <a
          href="#start"
          class="socials">{$_("nav.start", {
            default: "Facebook",
          })}</a
        >
        <a
          href="#benefits"
          class="socials">{$_("nav.benefits", {
            default: "Twitter",
          })}</a
        >
        <a
          href="#ourService"
          class="socials">{$_("nav.ourService", {
            default: "Instagram",
          })}</a
        >
        
      </div>

    </div>
  </div>
{/if}

<style>
  .title {
    font-family: theme("fontFamily.serif");
    font-size: calc(48 / var(--ratio));
    font-weight: 300;
    line-height: calc(56 / var(--ratio));
    padding: calc(15 / var(--ratio));
    color: white;
  }
	.socials {
    font-size: calc(16 / var(--ratio));
    line-height: calc(28 / var(--ratio));
    font-weight: 400;
    color: white;
    text-transform: uppercase;
	}
</style>
