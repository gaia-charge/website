<script>
  import { _ } from "svelte-i18n";
  import { Dropdown, DropdownShell, Button } from "attractions";
  import { ChevronDownIcon, BarChart2Icon } from "svelte-feather-icons";

  export let orderNetworksBy;
  export let callback = () => {};

  const orders = ["connectors", "locations", "total-power"];
</script>

<DropdownShell let:toggle>
  <Button outline small on:click={toggle} style="margin-top: -0.5em;">
    <BarChart2Icon size="16" class="no-flex" />
    <!-- {$_("ev-stats.order-by", {
      default: "Order by",
    })}
    {$_(`ev-stats.${orderNetworksBy}`).toLowerCase()}
    <ChevronDownIcon size="24" class="ml dropdown-chevron no-flex" /> -->
  </Button>
  <Dropdown>
    {#each orders as order}
      <Button
        on:click={() => {
          callback(order);
          toggle();
        }}
        style="width: 100%"
      >
        {$_("ev-stats.by", { default: "By" })}
        {$_(`ev-stats.${order}`).toLowerCase()}
      </Button>
    {/each}
  </Dropdown>
</DropdownShell>

<style>
  :global(.dropdown) {
    width: 11rem;
  }
</style>
