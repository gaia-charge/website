<script>
  import { _ } from "svelte-i18n";
  import { Dropdown, DropdownShell, Button } from "attractions";
  import { ChevronDownIcon } from 'svelte-feather-icons';

  export let orderNetworksBy;
  export let callback = () => {};

  const orders = [
    'connectors',
    'locations',
    'total-power'
  ]
</script>

<DropdownShell let:toggle>
  <Button outline small on:click={toggle}>
    {$_("ev-stats.order-by", {
      default: "Order by",
    })}
    {$_(`ev-stats.${orderNetworksBy}`).toLowerCase()}
    <ChevronDownIcon size="24" class="ml dropdown-chevron" style="flex: none" />
  </Button>
  <Dropdown>
    {#each orders as order }
      <Button on:click={() => {
        callback(order);
        toggle();
      }}>
        {$_(`ev-stats.${order}`)}
      </Button>
    {/each}
  </Dropdown>
</DropdownShell>