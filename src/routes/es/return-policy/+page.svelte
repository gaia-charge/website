<script>
  import Nav from "../../../components/Nav.svelte";
  import Footer from "../../../components/Footer.svelte";
</script>

<svelte:head>
  <title>Política de devoluciones - Gaia Charge</title>
</svelte:head>

<Nav />

<article>
  <div class="headline z-40 text-center">
    <h1>Política de devoluciones</h1>
  </div>
  <div class="post mx-auto">
    <h2>1. Ámbito</h2>
    <p>Esta Política de devoluciones se aplica únicamente a compras realizadas en nuestra tienda online para entregas en España.</p>

    <h2>2. Productos defectuosos</h2>
    <p>Aceptamos devoluciones <strong>únicamente</strong> cuando el producto presenta un defecto de fabricación. En ese caso, el cliente podrá elegir entre:</p>
    <ul>
      <li>el reemplazo del producto defectuoso por otro idéntico, o</li>
      <li>la devolución íntegra del importe pagado.</li>
    </ul>

    <h2>3. Qué <em>no</em> cubre esta política</h2>
    <p>No se admiten devoluciones ni reemplazos en los siguientes casos:</p>
    <ul>
      <li>daños ocasionados durante el transporte (a menos que se constate que el envío ha sido manipulado o el paquete ha llegado visiblemente abierto);</li>
      <li>fallos derivados de una instalación incorrecta o inadecuada (la instalación debe realizarse conforme a las instrucciones del fabricante y la normativa aplicable);</li>
      <li>daños causados por uso indebido, negligencia, modificaciones, adaptación o mantenimiento incorrectos, o condiciones de uso diferentes a las especificadas por el fabricante.</li>
    </ul>

    <h2>4. Procedimiento de devolución</h2>
    <ul>
      <li>Si detecta un producto defectuoso, contacte con nosotros lo antes posible, indicando el número de pedido, la referencia del producto y una descripción del defecto, junto con, en su caso, fotografías que documenten el problema.</li>
      <li>Le confirmaremos si el producto está cubierto por la garantía de fabricación y le indicaremos los pasos para proceder al envío de devolución o al reemplazo.</li>
      <li>En caso de aprobarse la devolución, le enviaremos instrucciones específicas sobre cómo devolver el producto. Por motivos de control y seguridad, no aceptamos devoluciones sin previo aviso ni sin número de autorización.</li>
      <li>Los costes de envío de la devolución serán gestionados conforme a lo que se acuerde en su caso (por ejemplo, cuando se confirme que el defecto es de fabricación).</li>
    </ul>

    <h2>5. Plazo</h2>
    <p>La reclamación por defecto de fabricación deberá efectuarse dentro de los plazos previstos en la garantía del fabricante o en su defecto, en un plazo razonable tras la detección del defecto.</p>

    <h2>6. Reembolso</h2>
    <p>Si opta por el reembolso, se efectuará mediante el mismo método de pago que empleó en la compra, una vez recibido y comprobado el producto devuelto. El importe reembolsado será el precio del producto excluyendo gastos de envío (salvo que se haya determinado que esos gastos también estaban sujetos al defecto).</p>

    <h2>7. Garantía legal</h2>
    <p>Esta política de devolución por defecto de fabricación se aplica además de la garantía legal que corresponde al consumidor conforme al artículo 123 y siguientes del Real Decreto Legislativo 1/2007 (Texto Refundido de la Ley General para la Defensa de los Consumidores y Usuarios) y demás normativa aplicable en España.</p>

    <h2>8. Contacto</h2>
    <p>Si tiene cualquier duda sobre esta política de devoluciones, por favor contáctenos en <em>contact@gaiacharge.com</em> y estaremos encantados de ayudarle.</p>
  </div>
</article>

<Footer />

<style lang="postcss">
  .headline {
    padding-top: calc(179 / var(--ratio));
    padding-left: calc(380 / var(--ratio));
    padding-right: calc(380 / var(--ratio));
  }

  .headline h1 {
    font-family: theme("fontFamily.serif");
    font-size: calc(52 / var(--ratio));
    font-weight: 500;
    line-height: calc(57 / var(--ratio));
  }

  @media only screen and (max-width: 431px) {
    .headline {
      padding-top: 45%;
      padding-left: calc(200 / var(--ratio));
      padding-right: calc(200 / var(--ratio));
    }
  }

  .post {
    min-height: 50vh;
    max-width: calc(1008 / var(--ratio));
  }

  .logo {
    max-height: calc(100 / var(--ratio));
  }

  :global(h2) {
    font-size: calc(18 / var(--ratio));
    line-height: calc(28 / var(--ratio));
    padding: calc(10 / var(--ratio));
    font-weight: 600;
  }

  :global(p) {
    font-size: calc(18 / var(--ratio));
    line-height: calc(28 / var(--ratio));
    padding: calc(10 / var(--ratio));
    font-weight: 300;
  }

  :global(li) {
    font-size: calc(18 / var(--ratio));
    line-height: calc(28 / var(--ratio));
    padding: calc(5 / var(--ratio));
    margin-left: calc(30 / var(--ratio));
    font-weight: 300;
    list-style: outside;
  }

  :global(blockquote) {
    background-color: #fff;
    padding: calc(20 / var(--ratio));
    font-style: italic;
    font-family: "New Spirit";
    border-left: 4px solid #65d45c;
  }
</style>
