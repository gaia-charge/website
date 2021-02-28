<script>
  import SvgMotorbike from "../svg/1_motorbike.svelte";
  import SvgCar from "../svg/1_car.svelte";
  import { _ } from "svelte-i18n";
  import VisibilityGuard from "./utils/VisibilityGuard.svelte";
  export let stopAnimationCharcing;
</script>

<div class="scene charging">
  <div class="clouds">
    <svg
      width="275"
      height="52"
      class="cloud cloud-1"
      class:kill-animation={stopAnimationCharcing}
    >
      <use xlink:href="#svg-cloud" />
    </svg>
    <svg
      width="275"
      height="52"
      class="cloud cloud-2"
      class:kill-animation={stopAnimationCharcing}
    >
      <use xlink:href="#svg-cloud" />
    </svg>
    <svg
      width="275"
      height="52"
      class="cloud cloud-3"
      class:kill-animation={stopAnimationCharcing}
    >
      <use xlink:href="#svg-cloud" />
    </svg>

    <svg width="41" height="10" class="bird bird-1"
      ><use xlink:href="#svg-bird" /></svg
    >
    <svg width="41" height="10" class="bird bird-2"
      ><use xlink:href="#svg-bird" /></svg
    >
    <svg width="41" height="10" class="bird bird-3"
      ><use xlink:href="#svg-bird" /></svg
    >
  </div>
  <div class="middle">
    <svg
      style="transform: translateZ(-1px) scale(1.3); right: -16vw;"
      class="hill hill-1"
      viewBox="0 0 629.7 594.48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m628.2 593c-23.37-335-154.76-591.5-313.35-591.5s-289.98 256.5-313.35 591.5z"
        fill="#9fcf96"
      /><path
        d="m628.2 594.48h-626.7a1.51 1.51 0 0 1 -1.5-1.61c11.4-163.31 49.09-313.16 106.14-421.94 28.29-53.93 60.31-96.09 95.17-125.27 36.2-30.3 74.4-45.66 113.54-45.66s77.34 15.36 113.54 45.66c34.86 29.18 66.88 71.32 95.17 125.27 57.05 108.78 94.74 258.62 106.14 421.94a1.54 1.54 0 0 1 -.4 1.13 1.49 1.49 0 0 1 -1.1.48zm-625.09-3h623.48c-11.5-162.29-49-311.1-105.69-419.16-28.11-53.59-59.9-95.43-94.43-124.32-35.65-29.87-73.2-45-111.62-45s-76 15.13-111.62 45c-34.55 28.93-66.33 70.77-94.44 124.36-56.67 108.02-94.18 256.83-105.68 419.12z"
        fill="#97c4a2"
      /><path
        d="m357.7 7.83c-194.34-51.83-333.63 261.57-356.2 585.17h64.19c21.38-332.67 121.17-585 292.01-585.17z"
        fill="#89c47e"
      /><path
        d="m628.2 594.48h-626.7a1.51 1.51 0 0 1 -1.5-1.61c11.4-163.31 49.09-313.16 106.14-421.94 28.29-53.93 60.31-96.09 95.17-125.27 36.2-30.3 74.4-45.66 113.54-45.66s77.34 15.36 113.54 45.66c34.86 29.18 66.88 71.32 95.17 125.27 57.05 108.78 94.74 258.62 106.14 421.94a1.54 1.54 0 0 1 -.4 1.13 1.49 1.49 0 0 1 -1.1.48zm-625.09-3h623.48c-11.5-162.29-49-311.1-105.69-419.16-28.11-53.59-59.9-95.43-94.43-124.32-35.65-29.87-73.2-45-111.62-45s-76 15.13-111.62 45c-34.55 28.93-66.33 70.77-94.44 124.36-56.67 108.02-94.18 256.83-105.68 419.12z"
        fill="#6c9b64"
      />
    </svg>
    <svg
      style="transform: translateZ(-.3px) scale(.8); width: 33.06vw;"
      class="hill hill-2"
      viewBox="0 0 546.95 490"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m1.5 488.5h544c-36.6-282.38-144.52-487-272-487s-235.41 204.62-272 487z"
        fill="#c3e090"
      /><path
        d="m1.76 488.5h56.18c30.66-279.6 116.92-480.5 254.06-480.67-155.87-46.23-272.4 197.88-310.24 480.67z"
        fill="#acd576"
      /><path
        d="m545.45 490h-543.95a1.5 1.5 0 0 1 -1.5-1.69c9.06-69.88 22.53-135.64 40.06-195.45 17.31-59.09 38.18-111.06 62-154.47 24.16-44 50.84-78.2 79.3-101.66 29.64-24.37 60.57-36.73 92.11-36.73s62.53 12.36 92.08 36.73c28.45 23.46 55.14 57.67 79.3 101.66 23.85 43.41 44.72 95.38 62 154.47 17.52 59.81 31 125.57 40.06 195.45a1.5 1.5 0 0 1 -1.49 1.69zm-542.24-3h540.53c-9-69.09-22.4-134.12-39.74-193.3-17.25-58.87-38-110.64-61.78-153.87-23.98-43.65-50.42-77.56-78.58-100.83-29-23.91-59.34-36-90.17-36s-61.16 12.13-90.16 36c-28.16 23.23-54.6 57.14-78.58 100.79-23.73 43.27-44.53 95.04-61.73 153.91-17.39 59.18-30.76 124.21-39.79 193.3z"
        fill="#6c9b64"
      />
    </svg>
    <svg
      style="transform: translateZ(-.2px) scale(1);"
      class="hill hill-3"
      viewBox="0 0 853.89 321.11"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m1.92 319.61h852c-64.66-186.71-231-319.61-426.02-319.61s-361.35 132.9-425.98 319.61z"
        fill="#92c988"
      /><path
        d="m852.31 321.11h-850.81a1.48 1.48 0 0 1 -1.22-.63 1.5 1.5 0 0 1 -.2-1.36 505.1 505.1 0 0 1 66.77-128.46 475.94 475.94 0 0 1 97.92-100.9c77.01-58.61 167.65-89.59 262.13-89.59s185.1 30.98 262.1 89.59a476.18 476.18 0 0 1 98 100.9 504.75 504.75 0 0 1 66.76 128.46 1.49 1.49 0 0 1 -1.41 2zm-848.69-3h846.57a502 502 0 0 0 -65.67-125.7 473.33 473.33 0 0 0 -97.3-100.27c-76.48-58.21-166.5-89-260.32-89s-183.83 30.76-260.31 89a473.33 473.33 0 0 0 -97.31 100.27 502 502 0 0 0 -65.66 125.7z"
        fill="#6c9b64"
      />
    </svg>
    <svg
      class="bush bush-1"
      viewBox="0 0 163.25 53.78"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m114.88 33.3a29.09 29.09 0 0 0 -3.25.19 43.48 43.48 0 0 0 -19.27-24.34 39.42 39.42 0 0 1 53.34 28.94 13.48 13.48 0 0 1 15.55 13.37v.5h-116.72a1.21 1.21 0 0 1 0-.18h96.27c-2.94-10.62-13.43-18.48-25.92-18.48z"
        fill="#80b385"
      /><path
        d="m147.69 35.75h-.45a41.56 41.56 0 0 0 -54.85-29 52 52 0 0 0 -25.78-6.75c-22.68 0-42.41 14.4-47.61 34.5-10.39-.43-19 7.23-19 16.73v.67a2 2 0 0 0 2 1.88h159.24a2 2 0 0 0 2-2v-.51a15.56 15.56 0 0 0 -15.55-15.52zm-103.43 13.84a2 2 0 0 0 -.78.19h-39.38c.8-6.35 6.78-11.3 14-11.3a15.65 15.65 0 0 1 2.15.15 2 2 0 0 0 2.24-1.56c4.12-19.16 22.67-33.07 44.12-33.07a47.93 47.93 0 0 1 24.39 6.6.71.71 0 0 0 .09.07 41.45 41.45 0 0 1 18.44 23.21 2 2 0 0 0 2.15 1.41 29.15 29.15 0 0 1 3-.17c10.4 0 19.55 5.83 23.18 14.47zm98 .19c-3.71-11.05-14.83-18.66-27.53-18.66-.61 0-1.22 0-1.84.06a45.09 45.09 0 0 0 -16.24-21.64 37.58 37.58 0 0 1 47 28.75 2 2 0 0 0 2.35 1.59 11 11 0 0 1 1.73-.13 11.57 11.57 0 0 1 11.46 10z"
        fill="#71a5a6"
      /><path
        d="m140.8 51.78c-2.94-10.62-13.43-18.48-25.92-18.48a29.09 29.09 0 0 0 -3.25.19 43.48 43.48 0 0 0 -19.27-24.34 49.55 49.55 0 0 0 -25.86-7.15c-22.75 0-41.72 14.9-45.94 34.65a17.56 17.56 0 0 0 -2.42-.17c-8.87 0-16.07 6.6-16.07 14.75v.55z"
        fill="#bfe067"
      /><path
        d="m89 8.83c-13.92-3.61-55.5-1.19-57.92 36 0 0-12.33-5-17.33 7h-11.66s1.62-15.67 18.47-15.18c0 0 15.17-51.44 68.68-28.88.57.23.35 1.23-.24 1.06z"
        fill="#98c93f"
      /><path
        d="m142.25 51.38c-3.19-11.53-14.45-19.58-27.37-19.58-.71 0-1.44 0-2.18.09a45.09 45.09 0 0 0 -19.55-24 51.13 51.13 0 0 0 -26.65-7.39c-22.5 0-42.12 14.44-47.1 34.5-10.22-.66-18.83 6.88-18.83 16.23v.64a1.49 1.49 0 0 0 1.49 1.41h138.74a1.5 1.5 0 0 0 1.45-1.9zm-97.67-1.1h-41c.57-6.87 6.88-12.28 14.56-12.28a16.67 16.67 0 0 1 2.22.15 1.5 1.5 0 0 0 1.64-1.15c4.17-19.43 22.88-33.5 44.5-33.5a48.17 48.17 0 0 1 25.08 6.93 42 42 0 0 1 18.62 23.49 1.5 1.5 0 0 0 1.6 1.08 27.71 27.71 0 0 1 3.08-.18c10.85 0 20.37 6.27 23.86 15.48z"
        fill="#548080"
      />
    </svg>
    <svg
      class="bush bush-2"
      viewBox="0 0 140.47 43.59"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m113.46 27c-1.09 0-2.15 0-3.2.15-5.39-14.78-23.26-25.65-44.43-25.65-22.41 0-41.07 12.14-45.23 28.23a20.71 20.71 0 0 0 -2.38-.13c-8.74 0-15.82 5.4-15.82 12.01v.45h136.6c-2.93-8.65-13.25-15.06-25.54-15.06z"
        fill="#bfe067"
      /><path
        d="m90.07 7.77c-14-2.81-55.73-.93-58.16 28 0 0-13.39-2.33-18.42 7l-10.69-1.57s1.64-12.2 18.55-11.78c0 0 15.24-40 69-22.48a.43.43 0 1 1 -.28.83z"
        fill="#98c93f"
      /><path
        d="m140.39 41.59c-3.17-9.47-14.24-16.08-26.93-16.08-.72 0-1.45 0-2.2.07-4-9.69-13-17.46-24.41-21.8a51.08 51.08 0 0 0 -18.85-3.78h-1.1-1.1c-16.19 0-30.86 6.34-39.49 16.18a32.92 32.92 0 0 0 -7.24 11.94h-.85a21.45 21.45 0 0 0 -7.54 1.36c-6.27 2.02-10.68 6.71-10.68 12.17v.54a1.51 1.51 0 0 0 1.5 1.4h42.69a1 1 0 0 0 .25 0h94.56a1.49 1.49 0 0 0 1.42-2zm-136.39-1.03c.45-3.56 3.37-6.56 7.46-8.21a20.06 20.06 0 0 1 6.18-1 19 19 0 0 1 2.26.13 1.53 1.53 0 0 0 1.1-.29 1.52 1.52 0 0 0 1.07-1.08 29.36 29.36 0 0 1 6.56-12c8.37-9.11 22.56-15.11 37.8-15.11h.57.88a56.5 56.5 0 0 1 17.25 3.32c1.48.58 3 1.22 4.54 2a1.21 1.21 0 0 0 .41.12c9 4.38 15.81 11.14 18.77 19.26a1.5 1.5 0 0 0 1.55 1c1.07-.09 2.08-.14 3.06-.14 10.48 0 19.69 4.86 23.27 12.05z"
        fill="#548080"
      />
    </svg>
    <div class="road" />
    <VisibilityGuard let:visible>
      <SvgMotorbike {visible} />
    </VisibilityGuard>
    <SvgCar {stopAnimationCharcing} />
  </div>
  <div class="overlay" />
  <div class="text">
    <div class="container">
      <p class="subtitle">
        <strong>{$_("subtitle", { default: "Gaia Green Tech is" })}</strong>
      </p>
      <h2 class="title" id="visibleCharging">
        {$_("charging.title1", { default: "Accessible" })}<br />
        {$_("charging.title2", { default: "charging network" })}
      </h2>
      <div class="lead">
        <p>
          {$_("charging.lead", {
            default:
              "Charge your electric vehicle while working, shopping, or going out! There's no need to keep thinking about how much battery is left.",
          })}
        </p>
      </div>
    </div>
  </div>
</div>

<style>
  @keyframes move-clouds-1 {
    to {
      transform: translateX(60vw);
    }
  }

  @keyframes move-clouds-2 {
    to {
      transform: translateX(-80vw);
    }
  }

  @keyframes move-clouds-3 {
    from {
      transform: translateX(-50vw) scaleX(-1);
    }

    to {
      transform: translateX(0) scaleX(-1);
    }
  }

  .clouds {
    z-index: 2;
  }

  .cloud-1 {
    width: 17.5rem;
    top: 100px; /* temp */
    left: 20vw;
    animation-name: move-clouds-1;
    animation-duration: 90s;
    animation-delay: 2s;
  }

  .cloud-2 {
    width: 12rem;
    top: 235px; /* temp */
    right: 5vw;
    animation-name: move-clouds-2;
    animation-duration: 120s;
    animation-delay: 3s;
  }

  .cloud-3 {
    width: 10rem;
    top: 365px; /* temp */
    right: 22.5vw;
    transform: translateX(0) scaleX(-1);
    animation-name: move-clouds-3;
    animation-duration: 100s;
    animation-direction: alternate-reverse;
    animation-delay: 4s;
  }

  .bird-1 {
    top: 120px; /* TEMP */
    right: 15vw;
  }

  .bird-2 {
    left: 50%;
    top: 25%;
  }

  .bird-3 {
    width: 1.85rem;
    left: calc(59.25vw / 2);
    bottom: calc(321.11 / 853.89 * 59.25vw);
    opacity: 0.8;
  }

  .middle {
    position: relative;
    z-index: 1;
    height: 100vh;
    width: 100%;
    max-width: 100vw;
  }

  .road {
    height: 7rem;
    border-top: 2px solid rgba(255, 255, 255, 0.5);
    background-color: #706f6f;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 4;
  }

  .hill {
    position: absolute;
    bottom: 0;
  }

  .hill-1 {
    width: 36.81vw;
    transform: translateX(15.63%);
    right: 0;
    z-index: 3;
  }

  .hill-2 {
    width: 34.06vw;
    right: 17.85vw;
    z-index: 2;
  }

  .hill-3 {
    width: 59.25vw;
    transform: translateX(-24.67%);
    z-index: 1;
    opacity: 0.8;
    left: -18vw;
  }

  .bush {
    position: absolute;
    bottom: 7rem;
    z-index: 5;
    margin-bottom: -1px;
  }

  .bush-1 {
    width: 11.4vw;
    right: 10vw;
  }

  .bush-2 {
    width: 9.81vw;
    right: -1.78vw;
  }

  .text {
    bottom: calc(321.11 / 853.89 * 59.25vw); /* hill-3 height */
    z-index: 10;
  }

  @media only screen and (max-width: 768px) {
    .hill-3 {
      width: 220vw !important;
      right: 32vw !important;
      left: unset;
      opacity: 1;
      z-index: 2;
    }

    .hill-2 {
      -webkit-transform: translateZ(-0.3px) scaleX(1.7) !important;
      transform: translateZ(-0.3px) scaleX(1.7) scaleY(1.1) !important;
      width: 73.06vw !important;
      right: -14.85vw !important;
      z-index: 1;
    }

    .hill-1 {
      transform: translateZ(-1px) scaleX(1.8) !important;
      right: -116vw !important;
      width: 100vw !important;
    }

    .cloud-1 {
      width: 11.5rem;
      top: 100px;
      left: 80vw;
    }

    .cloud-2 {
      display: none;
    }

    .cloud-3 {
      display: none;
    }

    .text {
      top: -25vh;
    }

    .bird-1 {
      display: none;
    }

    .bird-2 {
      top: 55%;
    }

    .bird-3 {
      display: none;
    }
  }

  /* iPad Pro */
  @media only screen and (min-width: 900px) and (max-width: 1124px) and (min-height: 1150px) {
    .hill-1 {
      transform: translateZ(-1px) scale(1.5) !important;
      width: 40.81vw !important;
    }

    .hill-2 {
      transform: translateZ(-0.3px) scale(1.1) !important;
      width: 37.06vw !important;
    }
  }
</style>
