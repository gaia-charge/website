<script>
  import { _ } from "svelte-i18n";
  import { Dropdown, DropdownShell, Button } from "attractions";

  export let selectedCountry;
  export let callback = () => {};

  const countries = {
    es: "🇪🇸",
  };
  $_("countries.es", { default: "Spain" });
</script>

<DropdownShell let:toggle>
  <Button selected on:click={toggle}>
    {$_("ev-stats.country", { default: "Country" })}:
    {countries[selectedCountry]}
  </Button>
  <Dropdown>
    {#each Object.keys(countries) as country}
      <Button
        on:click={() => {
          callback(country);
          toggle();
        }}
        style="width: 100%"
      >
        {countries[country]}
        {$_(`countries.${country}`)}
      </Button>
    {/each}
  </Dropdown>
</DropdownShell>
