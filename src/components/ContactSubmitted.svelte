<script>
  import { _ } from "svelte-i18n";
  import Scooter from "./../svg/2_scooter.svelte";

  export let showPopup;

  function handleClose() {
    showPopup = false;
  }
</script>

<div class="overlay">
  <div class="popup-tnx">
    <div class="text__inside">
      <h2 class="title" id="visibleContact">
        {$_("contactPopup.title", { default: "Thank you!" })}
      </h2>
      <div class="lead no-width">
        <p>
          {$_("contactPopup.lead", {
            default:
              "Our team will come back to you as soon as possible. Thank you for your message.",
          })}
        </p>
      </div>
    </div>

    <div class="scooter">
      <Scooter classes="scooter" />
      <svg
        class="bush-2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256.95 53.3"
      >
        <path
          class="cls-4b"
          d="M209.08,32.8a29,29,0,0,0-3.25.19A43.45,43.45,0,0,0,186.55,8.65a39.42,39.42,0,0,1,53.34,28.94,13.7,13.7,0,0,1,2-.16A13.53,13.53,0,0,1,255.45,51c0,.17,0,.33,0,.5H138.72l.06-.18H235C232.05,40.66,221.57,32.8,209.08,32.8Z"
        />
        <path
          class="cls-5"
          d="M255.44,53H136.79l.53-2.05.34-1,1.12-.09h94.14c-3.48-9.21-13-15.48-23.84-15.48a27.71,27.71,0,0,0-3.08.18l-1.24.14-.37-1.2A41.9,41.9,0,0,0,185.77,9.93l-2.55-1.55L186,7.26a40.56,40.56,0,0,1,15.24-2.94A41,41,0,0,1,241.08,36c.28,0,.57,0,.85,0a15,15,0,0,1,15,15c0,.16,0,.3,0,.46l-.06,1.44Zm-19.28-3h17.75a12,12,0,0,0-12-11,12.91,12.91,0,0,0-1.81.14l-1.42.22-.28-1.41A38,38,0,0,0,189.9,9a44.69,44.69,0,0,1,17,22.34c.75-.05,1.47-.08,2.19-.08C221.65,31.3,232.64,38.92,236.16,50Z"
        />
        <path
          class="cls-6"
          d="M138.78,51.28H96.28c0-.18,0-.37,0-.55,0-8.15,7.19-14.75,16.07-14.75a17.42,17.42,0,0,1,2.41.17C119,16.4,137.94,1.5,160.7,1.5a49.51,49.51,0,0,1,25.85,7.15"
        />
        <path
          class="cls-6"
          d="M186.55,8.65A43.45,43.45,0,0,1,205.83,33a29,29,0,0,1,3.25-.19c12.49,0,23,7.86,25.91,18.48H138.78"
        />
        <path
          class="cls-5"
          d="M237,52.78H138.78v-3h94.14c-3.48-9.21-13-15.48-23.84-15.48a27.71,27.71,0,0,0-3.08.18l-1.24.14-.37-1.2A41.9,41.9,0,0,0,185.77,9.93l1.56-2.56a45,45,0,0,1,19.56,24c.75-.05,1.47-.08,2.19-.08,12.92,0,24.17,8.05,27.36,19.58Z"
        />
        <path
          class="cls-7"
          d="M183.19,8.33c-13.93-3.61-55.51-1.19-57.93,36,0,0-13.33-3-18.33,9l-10.65-2s1.63-15.62,18.47-15.13c0,0,15.18-51.44,68.68-28.88C184,7.51,183.79,8.49,183.19,8.33Z"
        />
        <path
          class="cls-5"
          d="M138.78,52.78H94.84l-.06-1.44c0-.2,0-.41,0-.61,0-9.34,8.53-16.9,18.82-16.21C118.58,14.44,138.16,0,160.7,0a51.07,51.07,0,0,1,26.63,7.37l-1.56,2.56A48.1,48.1,0,0,0,160.7,3c-21.62,0-40.33,14.07-44.48,33.46l-.29,1.37-1.38-.2c-8.68-1.19-16.16,4.64-16.75,12.15h41Z"
        />
      </svg>
      <svg
        class="bush-2_mobile"
        viewBox="0 0 67 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.6846 33.4225C17.5839 33.4225 16.5021 33.4908 15.4383 33.6102C12.3978 23.478 5.4487 14.8465 -3.81575 9.1741C0.715088 7.3442 5.66253 6.3324 10.8466 6.3324C29.9749 6.3324 45.9106 20.0471 49.4626 38.2236C50.1248 38.1232 50.8031 38.071 51.4933 38.071C58.9529 38.071 64.9999 44.1479 64.9999 51.6452C64.9999 51.8148 64.9929 51.9824 64.9869 52.1501H-51.5933C-51.5763 52.0878 -51.5544 52.0286 -51.5374 51.9664H44.5671C41.6315 41.3072 31.1574 33.4225 18.6846 33.4225Z"
          fill="#9FCF96"
        />
        <path
          d="M18.6846 33.4225C17.5839 33.4225 16.5021 33.4908 15.4383 33.6102C12.3978 23.478 5.4487 14.8465 -3.81575 9.1741C0.715088 7.3442 5.66253 6.3324 10.8466 6.3324C29.9748 6.3324 45.9106 20.0471 49.4626 38.2236C50.1248 38.1232 50.8031 38.071 51.4933 38.071C58.9528 38.071 64.9999 44.1479 64.9999 51.6452C64.9999 51.8148 64.9929 51.9824 64.9869 52.1501H-51.5933C-51.5763 52.0878 -51.5544 52.0286 -51.5374 51.9664H44.5671C41.6315 41.3072 31.1574 33.4225 18.6846 33.4225Z"
          stroke="#275E5E"
          stroke-width="3"
          stroke-miterlimit="10"
        />
        <path
          d="M-3.81569 9.17407C5.44876 14.8465 12.3979 23.478 15.4384 33.6102C16.5022 33.4907 17.584 33.4215 18.6847 33.4215C31.1565 33.4215 41.6316 41.3062 44.5672 51.9654H-51.5374"
          fill="#CCF06B"
        />
        <path
          d="M-3.81569 9.17407C5.44877 14.8465 12.3979 23.478 15.4384 33.6102C16.5022 33.4907 17.584 33.4215 18.6847 33.4215C31.1565 33.4215 41.6316 41.3062 44.5672 51.9654H-51.5374"
          stroke="#275E5E"
          stroke-width="3"
          stroke-miterlimit="10"
        />
      </svg>
    </div>

    <div class="right">
      <div class="windturbine windturbine-2">
        <div class="windturbine__center">
          <div class="windturbine__elem is-moving is-inner" />
          <div class="windturbine__elem is-moving is-outer" />
          <div class="windturbine__elem is-stand">
            <svg
              width="40"
              height="396"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 39.54 396.23"
            >
              <path
                class="cls-4"
                d="M28.13,5.21,38,394.1l-36.53.63,10.57-390a3.19,3.19,0,0,1,3-3.26h9.6A3.64,3.64,0,0,1,28.13,5.21Z"
              /><path
                class="svg-2"
                d="M1.5,396.23A1.5,1.5,0,0,1,0,394.69l10.58-390A4.66,4.66,0,0,1,15.09,0h9.6a5.09,5.09,0,0,1,4.93,5.17h0l9.91,388.89a1.54,1.54,0,0,1-.41,1.08,1.52,1.52,0,0,1-1.06.46l-36.53.63ZM15.09,3a1.72,1.72,0,0,0-1.52,1.8L3,393.2l33.46-.57L26.63,5.25h0A2.16,2.16,0,0,0,24.69,3Z"
              /><path
                class="svg-3"
                d="M19.12,1.5l-6.2,393-11.42.28L13,2.47Z"
              /><path
                class="svg-4"
                d="M1.5,396.23A1.5,1.5,0,0,1,0,394.69l10.58-390A4.66,4.66,0,0,1,15.09,0h9.6a5.09,5.09,0,0,1,4.93,5.17h0l9.91,388.89a1.54,1.54,0,0,1-.41,1.08,1.52,1.52,0,0,1-1.06.46l-36.53.63ZM15.09,3a1.72,1.72,0,0,0-1.52,1.8L3,393.2l33.46-.57L26.63,5.25h0A2.16,2.16,0,0,0,24.69,3Z"
              /><path
                class="svg-4"
                d="M30.88,114.81H9.13a1.5,1.5,0,0,1,0-3H30.88a1.5,1.5,0,1,1,0,3Z"
              /><path
                class="svg-4"
                d="M31.15,125.13H8.84a1.5,1.5,0,0,1,0-3H31.15a1.5,1.5,0,1,1,0,3Z"
              />
            </svg>
          </div>
          <div class="windturbine__elem is-moving is-blades" />
        </div>
      </div>
      <svg
        class="bush-1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 258.01 50.2"
      >
        <path
          class="cls-1"
          d="M131.57,30.92c-1.27,0-2.51.07-3.73.18-6.27-17.21-27-29.86-51.7-29.86-26.07,0-47.79,14.13-52.63,32.85a25.16,25.16,0,0,0-2.77-.15c-10.17,0-18.41,6.26-18.41,14,0,.17,0,.35,0,.52h158.9C157.88,38.37,145.87,30.92,131.57,30.92Z"
        />
        <path
          class="cls-2"
          d="M101.56,8.53c-16.27-3.27-66.51.19-69.34,33.86,0,0-15.61-2.62-17.49,3.74L0,46.3s1.9-13,21.59-12.56c0,0,17.73-46.6,80.26-26.17A.5.5,0,1,1,101.56,8.53Z"
        />
        <path
          class="cls-3"
          d="M163.3,50.2H.91L.82,48.79c0-.2,0-.41,0-.61C.8,39.64,9.73,32.7,20.71,32.7c.56,0,1.11,0,1.66,0C28.07,13.7,50.41,0,76.11,0c24.17,0,45.63,12.19,52.7,29.78.95-.07,1.86-.1,2.73-.1,14.66,0,27.45,7.63,31.1,18.54ZM3.85,47.2H159c-4.07-8.64-15-14.52-27.46-14.52-1.12,0-2.3.06-3.6.17L126.8,33l-.4-1.09C120.21,14.87,99.53,3,76.11,3,51.21,3,29.69,16.34,24.93,34.73L24.61,36l-1.3-.15a24.29,24.29,0,0,0-2.6-.14C11.83,35.7,4.53,40.78,3.85,47.2Z"
        />
      </svg>
    </div>
    <a href="." on:click|preventDefault={handleClose} class="close">Close</a>
  </div>
</div>

<style>
  /* BUSHES */
  .cls-4b {
    fill: #9fcf96;
  }

  .cls-5 {
    fill: #275e5e;
  }

  .cls-6 {
    fill: #ccf06b;
  }

  .cls-7 {
    fill: #98c93f;
  }

  .bush-2 {
    width: 15vh;
    max-width: 20rem;
    position: absolute;
    bottom: -4px;
    left: 50px;
    -webkit-transform: matrix(-1, 0, 0, 1, 0, 0);
    transform: matrix(-1, 0, 0, 1, 0, 0);
  }

  .bush-2_mobile {
    display: none;
  }

  .cls-1 {
    fill: #ccf06b;
  }

  .cls-2 {
    fill: #98c93f;
  }

  .cls-3 {
    fill: #275e5e;
  }

  .bush-1 {
    width: 23vh;
    max-width: 20rem;
    position: absolute;
    bottom: -2px;
    right: 120px;
    z-index: 15;
  }

  /* WINDTURBINE COLORS */
  .svg-2 {
    fill: #47868a;
  }

  .svg-3 {
    fill: #c4e4e5;
  }

  .svg-4 {
    fill: #275f5f;
  }

  .cls-4 {
    fill: #fff;
  }

  .windturbine {
    position: absolute;
  }

  .windturbine__center {
    width: 100%;
    padding-bottom: 100%;
    height: 0;
    position: relative;
  }

  .windturbine__elem {
    background-size: cover;
    background-position: 50% 50%;
    background-repeat: no-repeat;
  }

  .windturbine__elem.is-moving {
    transform-origin: 50% 50%;
    will-change: transform;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .windturbine__elem.is-blades {
    background-image: url(/windturbine_blades.svg);
  }

  .windturbine__elem.is-inner {
    background-image: url(/windturbine_inner.svg);
  }

  .windturbine__elem.is-outer {
    background-image: url(/windturbine_outer.svg);
  }

  .windturbine__elem.is-stand {
    width: 9.5%;
    height: auto;
    top: 54%;
    left: 50%;
    transform: translateX(-50%);
    position: absolute;
  }

  .windturbine__elem.is-stand > svg {
    width: 100%;
  }

  .windturbine-2 {
    z-index: 3;
    margin: 0 !important;
    width: 40vh;
    -webkit-transform: translateY(57px);
    transform: translateY(47px);
    right: 35px;
    top: 2px;
  }

  /* Overlay */
  .overlay {
    position: fixed;
    width: 100vw;
    height: 100vh;
    left: 0px;
    top: 0px;
    background: rgba(39, 94, 94, 0.2);
    z-index: 100 !important;
  }

  /* Pop Up tnx */
  .popup-tnx {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    position: relative;
    padding: 2rem;
    padding-bottom: 0;
    width: 60vw;
    min-width: 800px;
    height: 500px;
    margin: auto;
    margin-top: 10%;
    background: #ffffff;
    border: 3px solid #275e5e;
    -webkit-box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.05);
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
  }

  .right {
    grid-column: 2;
    grid-row: 1 / 3;
    justify-self: stretch;
  }

  .scooter {
    grid-column: 1;
    grid-row: 2;
    justify-self: center;
    align-self: flex-end;
    transform: matrix(-1, 0, 0, 1, 0, 0) scale(2) translateY(-30px);
  }

  .popup-tnx .text__inside {
    grid-column: 1;
    grid-row: 1;
    justify-self: stretch;
    align-self: center;
    padding-left: 4rem;
  }

  .popup-tnx .lead {
    margin-bottom: 4.5vh;
  }

  .close {
    position: absolute;

    right: 4.07%;
    top: 5.05%;

    /* Desktop / Link */
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    /* identical to box height */
    line-height: 22px;
    text-decoration-line: underline;
    /* 1st level stroke color */
    color: #275e5e;
  }

  .no-width {
    width: unset !important;
  }

  /* MOBILE */
  @media only screen and (max-width: 768px) {
    .popup-tnx {
      grid-template-columns: 1fr;
      width: 90vw;
      min-width: unset;
      padding: 1rem;
      height: 70vh;
      margin-top: 15vh;
    }

    .popup-tnx .text__inside {
      text-align: center;
      padding: 1rem;
    }

    .windturbine-2 {
      display: none;
    }

    .scooter {
      position: absolute;
      left: 11vw;
      bottom: -0.7vh;
    }

    .bush-2 {
      display: none;
    }

    .bush-2_mobile {
      display: block;
      position: absolute;
      width: 61%;
      bottom: 0px;
      left: 10vw;
      transform: matrix(-1, 0, 0, 1, 0, 0);
    }

    .bush-1 {
      display: none;
    }
  }
</style>
