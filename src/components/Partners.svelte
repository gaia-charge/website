<script>
  import startup_valencia from "$lib/assets/partners/startup_valencia@2x.png";
  import aedive from "$lib/assets/partners/aedive@2x.png";
  import avve from "$lib/assets/partners/avve@2x.png";
  import portal_sostenibilidad from "$lib/assets/partners/portal_sostenibilidad@2x.png";
</script>

<ul class="flex flex-row items-center justify-around">
  <li><img src={startup_valencia} alt="Startup Valencia" /></li>
  <li>
    <img
      src={aedive}
      alt="Asociación Empresarial para el Desarrollo e Impulso de la Movilidad Eléctrica"
    />
  </li>
  <li><img src={avve} alt="Asociación Valenciana del Vehículo Eléctrico" /></li>
  <li>
    <img
      src={portal_sostenibilidad}
      alt="Portal de Sostenibilidad de Cámara Valencia"
    />
  </li>
</ul>

<style lang="postcss">
  ul {
    padding: calc(80 / var(--ratio)) calc(140 / var(--ratio));
  }

  li img {
    max-height: calc(45 / var(--ratio));
    max-width: calc(180 / var(--ratio));
    opacity: 0.5;
  }
</style>
