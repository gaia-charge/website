<script>
  import Nav from "../../../components/Nav.svelte";
  import Footer from "../../../components/Footer.svelte";

  import fig1 from "$lib/assets/mcv2030/fig1.png";
  import ayuntamiento_valencia from "$lib/assets/mcv2030/ayuntamiento_valencia.png";
  import missions_valencia_2030 from "$lib/assets/mcv2030/missions_valencia_2030.png";
  import mission_climatica_valencia from "$lib/assets/mcv2030/mission_climatica_valencia.png";
</script>

<svelte:head>
  <title>EVorada: Sistema de Recarga Urbana de Vehículos Eléctricos</title>
</svelte:head>

<Nav />

<article>
  <div class="headline z-40 text-center">
    <h1>EVorada: Sistema de Recarga Urbana de Vehículos Eléctricos</h1>
  </div>

  <div class="post mx-auto">
    <div><img src={fig1} class="mx-auto" alt="EVorada" /></div>
    <p>
      <strong
        >EVorada – Sistema de recarga urbana de vehículos eléctricos</strong
      >
      es un proyecto de innovación cuyo objetivo fue el desarrollo de una solución
      de recarga para vehículos eléctricos (VE) diseñada para integrarse directamente
      en los <strong>bordillos de las aceras</strong>. Este enfoque buscó
      proporcionar una infraestructura de carga
      <strong
        >sin obstáculos, eficiente en términos de espacio y visualmente discreta</strong
      >, contribuyendo al objetivo de
      <strong
        >movilidad urbana y metropolitana sostenible, inclusiva y eficiente</strong
      >. El proyecto fue desarrollado por Gaia Charge.
    </p>
    <p>
      Este proyecto recibió una subvención de <strong>77.654,54 euros</strong>
      otorgada por el programa Missions Climática Valencia 2030, lo que permitió
      coordinar un equipo multidisciplinar, adquirir equipamiento técnico y llevar
      a cabo todas las fases de diseño, desarrollo, pruebas y validación necesarias.
    </p>
    <h3 id="innovaci-n-y-logros-clave">Innovación y Logros Clave</h3>
    <p>
      La innovación central de EVorada reside en su <strong
        >diseño modular</strong
      >, que permite minimizar la huella urbana del punto de recarga:
    </p>
    <ol>
      <li>
        <strong>Conectores Empotrados:</strong> Pequeñas carcasas instaladas en
        el bordillo que alojan únicamente los
        <strong>conectores de Tipo 2</strong> y los indicadores LED. Este diseño
        se enfoca en mantener un impacto estético mínimo en el entorno urbano.
      </li>
      <li>
        <strong>Caja Central Oculta:</strong> Contiene toda la lógica y los
        sistemas electrónicos complejos, incluyendo sistemas de control,
        protección diferencial y termomagnética.
      </li>
    </ol>
    <h4 id="componentes-y-cumplimiento-normativo">
      Componentes y Cumplimiento Normativo
    </h4>
    <p>
      El hardware desarrollado incluye módulos de la marca <strong
        >Phoenix Contact</strong
      > para gestionar la comunicación entre el vehículo y la estación, y cumple
      con las normativas clave españolas y europeas, entre ellas:
    </p>
    <ul>
      <li>
        <strong>Reglamento Electrotécnico para Baja Tensión (REBT)</strong> y la
        <strong>ITC-BT-52</strong>.
      </li>
      <li>
        Normas de carga <strong>UNE-EN IEC 61851-1</strong> (empleando el Modo 3,
        común en instalaciones fijas).
      </li>
      <li>
        Normas de conectores <strong>UNE-EN IEC 62196-1/2</strong> (Conector Tipo
        2, estándar europeo).
      </li>
    </ul>
    <h4 id="software-y-experiencia-de-usuario">
      Software y Experiencia de Usuario
    </h4>
    <p>
      Se desarrolló el software de gestión <strong>Partner Dashboard</strong>,
      que se integra con los estándares industriales
      <strong>OCPP 1.6 y 2.0.1</strong>
      (Open Charge Point Protocol) y <strong>OCPI 2.2.1</strong> (Open Charge
      Point Interface), esenciales para la
      <strong>itinerancia y la interoperabilidad</strong> con operadores de red externos.
    </p>
    <p>
      La interfaz de usuario consta de una pantalla integrada que muestra
      el estado, duración y costo, y un <strong>código QR escaneable</strong>
      que redirige a una <strong>página web responsiva</strong>. La interfaz web
      está traducida al <strong>español, inglés y polaco</strong>.
    </p>
    <h3 id="validaci-n-y-limitaciones">Validación y Limitaciones</h3>
    <p>
      El prototipo fue sometido a ensayos de validación exhaustivos, incluyendo
      pruebas de carga continua, simulación de fallos (cortocircuitos y
      sobrecargas), y verificación del <strong>balanceo de carga</strong> para optimizar
      la carga simultánea. Los resultados confirmaron niveles óptimos de seguridad,
      estabilidad y eficiencia.
    </p>
    <ol>
      <li>
        <strong>Riesgos Climáticos:</strong> La instalación a ras de suelo
        aumenta el riesgo de
        <strong>cortocircuitos, fallos eléctricos y corrosión</strong>
        debido a la exposición al agua durante
        <strong>inundaciones y precipitaciones torrenciales</strong>, frecuentes
        en zonas como València.
      </li>
    </ol>
    <h3 id="alineamiento-con-la-misi-n-clim-tica-val-ncia-2030">
      Alineamiento con la Misión Climática València 2030
    </h3>
    <p>
      EVorada es una <strong
        >iniciativa desplegada por la Misión Climática València 2030</strong
      >. La Misión Climática busca que València se convierta en una
      <strong
        >ciudad climáticamente neutra e inteligente en 2030, por y para la
        ciudadanía</strong
      >, en línea con la Misión Europea de Ciudades.
    </p>
    <p>
      El proyecto contribuye a las transformaciones sistémicas necesarias y
      apoya la Estrategia Urbana València 2030 en el Dominio de Impacto: <strong
        >Movilidad urbana y metropolitana sostenible, inclusiva y eficiente</strong
      >
      (LE 03). Al promover el uso de Vehículos Eléctricos, EVorada impulsa la transición
      hacia la <strong>movilidad sostenible</strong> y refuerza la imagen de
      València como
      <strong>referente en innovación y sostenibilidad</strong>.
    </p>
    <div class="flex flex-row items-center justify-around h-full">
      <img src={ayuntamiento_valencia} class="logo" alt="Ayuntamiento de València" />
      <img src={missions_valencia_2030} class="logo" alt="Missions València 2030" />
      <img src={mission_climatica_valencia} class="logo" alt="Misión Climática València 2030" />
    </div>
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

  :global(p), :global(li) {
    font-size: calc(18 / var(--ratio));
    line-height: calc(28 / var(--ratio));
    padding: calc(20 / var(--ratio));
    font-weight: 300;
  }

  :global(blockquote) {
    background-color: #fff;
    padding: calc(20 / var(--ratio));
    font-style: italic;
    font-family: "New Spirit";
    border-left: 4px solid #65d45c;
  }
</style>
