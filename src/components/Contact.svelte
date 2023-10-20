<script>
  import arrow_right from "$lib/assets/svg/arrow_right.svg";
</script>

<div id="contact"></div>
<div class="contact bg-medium-blue text-white flex flex-row">
  <div class="info w-1/2">
    <h2>Estamos aquí para ayudar a que tu negocio crezca</h2>
    <p>
      Rellena este formulario y uno de nuestros expertos se pondrá en contacto
      contigo en la mayor brevedad posible.
    </p>
  </div>
  <div class="w-1/2">
    <form>
      <div class="flex flex-row flex-col">
        <label for="firstname">Nombre</label>
        <input type="text" id="firstname" placeholder="Nombre" />
      </div>
      <div class="flex flex-row flex-col">
        <label for="lastname">Apellidos</label>
        <input type="text" id="lastname" placeholder="Apellidos" />
      </div>
      <div class="flex flex-row flex-col">
        <label for="company">Nombre de la empresa</label>
        <input type="text" id="company" placeholder="Nombre de la empresa" />
      </div>
      <div class="flex flex-row flex-col">
        <label for="email">Correo electrónico</label>
        <input type="email" id="email" placeholder="Correo electrónico" />
      </div>
      <div class="flex flex-row flex-col">
        <label for="phone">Número de teléfono</label>
        <input type="tel" id="phone" placeholder="Número de teléfono" />
      </div>
      <div class="flex flex-row flex-col">
        <label for="message">Mensaje</label>
        <input type="text" id="message" placeholder="Mensaje" />
      </div>
      <div class="submit flex">
        <button
          type="submit"
          class="contact ml-auto text-white bg-green border-green border-2 rounded-full flex items-center justify-between justify-end"
        >
          Enviar
          <img src={arrow_right} class="inline-block" alt="Contacto" />
        </button>
      </div>
    </form>
  </div>
</div>

<style lang="postcss">
  :root {
    --ratio: 1440 * 1vw * 100;
  }

  #contact {
    /* Offset the fixed nav */
    margin-top: calc(-110 / var(--ratio));
    height: calc(110 / var(--ratio));
  }

  .contact {
    padding: calc(65 / var(--ratio)) 0;
  }
  .info {
    padding-left: calc(195 / var(--ratio));
    padding-right: calc(65 / var(--ratio));
  }
  .info h2 {
    font-family: theme("fontFamily.serif");
    font-size: calc(48 / var(--ratio));
    font-weight: 300;
    line-height: calc(56 / var(--ratio));
    color: theme("colors.green");
  }
  .info p {
    font-size: calc(18 / var(--ratio));
    font-weight: 300;
    line-height: calc(28 / var(--ratio));
  }

  form .flex-row {
    margin-bottom: calc(16 / var(--ratio));
  }
  label {
    font-size: calc(16 / var(--ratio));
    margin-bottom: calc(14 / var(--ratio));
    font-weight: 300;
  }
  input[type="text"],
  input[type="email"],
  input[type="tel"] {
    background-color: theme("colors.medium-blue");
    border: none;
    border-bottom: 1px solid theme("colors.white");
    outline: none;
    width: calc(510 / var(--ratio));
    font-size: calc(16 / var(--ratio));
    font-style: italic;
    font-weight: 200;
    padding-left: calc(30 / var(--ratio));
  }
  .submit {
    width: calc(510 / var(--ratio));
  }
  button[type="submit"] {
    font-size: calc(16 / var(--ratio));
    font-weight: 400;
    padding: calc(15 / var(--ratio)) calc(20 / var(--ratio));
    width: calc(191 / var(--ratio));
    margin-top: calc(30 / var(--ratio));
  }
  button[type="submit"] img {
    width: calc(16 / var(--ratio));
  }
</style>
