<script>
  import { _ } from "svelte-i18n";
  import Mobility from "../svg/2_mobility.svelte";

  import Bus from "../svg/2_bus.svelte";

  import Person1 from "../svg/2_person_1.svelte";
  import Person2 from "../svg/2_person_2.svelte";
  import Person3 from "../svg/2_person_3.svelte";

  import Scooter from "../svg/2_scooter.svelte";
  import Biker from "../svg/2_biker.svelte";

  import Bushes1 from "../svg/2_bushes_1.svelte";
  import Bushes2 from "../svg/2_bushes_2.svelte";
  import Bushes3 from "../svg/2_bushes_3.svelte";
  import VisibilityGuard from "./utils/VisibilityGuard.svelte";

  export let stopAnimationMobility;
</script>

<div class="scene mobility">
  <div class="clouds">
    <svg
      width="275"
      height="52"
      class="cloud cloud-1"
      class:kill-animation={stopAnimationMobility}
    >
      <use xlink:href="#svg-cloud" />
    </svg>
    <svg
      width="275"
      height="52"
      class="cloud cloud-2"
      class:kill-animation={stopAnimationMobility}
    >
      <use xlink:href="#svg-cloud" />
    </svg>
    <svg
      width="275"
      height="52"
      class="cloud cloud-3"
      class:kill-animation={stopAnimationMobility}
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
  <div class="buildings">
    <Mobility />
  </div>
  <div class="roads">
    <div class="road road-walk road-1x">
      <Person1 classes="person-1" />
      <Person2 classes="person-2" />
      <Person3 classes="person-3" />
      <Bushes3 classes="bushes" />
    </div>
    <div class="road road-scooter road-1x">
      <Scooter classes="scooter" />
      <Bushes2 classes="bushes" />
    </div>
    <div class="road road-cars road-5x">
      <Bus classes="bus" {stopAnimationMobility} />
      <Bushes1 classes="bushes" />
    </div>
    <div class="road road-bike road-3x">
      <VisibilityGuard let:visible>
        <Biker classes="biker" {visible} />
      </VisibilityGuard>
    </div>
  </div>
  <div class="text">
    <div class="text__inside">
      <p class="subtitle">
        <strong>{$_("subtitle", { default: "Gaia Green Tech is" })}</strong>
      </p>
      <h2 class="title" id="visibleMobility">
        {$_("mobility.title1", { default: "Sustainable" })}<br />
        {$_("mobility.title2", { default: "mobility" })}
      </h2>
      <div class="lead">
        <p>
          {$_("mobility.lead", {
            default:
              "Pick the best mode of transport for you. A car, a bicycle, a bus, or even a short walk. We try to make it as convenient as possible.",
          })}
        </p>
      </div>
    </div>
  </div>
</div>

<style>
  .mobility {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    position: relative;
  }

  .buildings {
    flex: 1 1 62vh;
    display: flex;
    align-items: flex-end;
    width: 100%;
    position: relative;
    z-index: 2;
  }

  .roads {
    flex: 1 1 38vh;
    width: 100%;
    background-color: #dedede;
  }

  .road {
    width: 100%;
    border-top: 2px solid #275e5e;
    display: flex;
    justify-content: stretch;
    position: relative;
  }

  .road-1x {
    height: calc(50 / 345 * 100%);
  }

  .road-3x {
    height: calc(80 / 345 * 100%);
  }

  .road-5x {
    height: calc(165 / 345 * 100%);
  }

  .road-walk {
    background-color: #c6c6c6;
    position: relative;
    z-index: 3;
  }

  .road-walk :global(svg) {
    position: absolute;
  }

  .road-walk :global(.person-1) {
    right: 15.25vw;
    bottom: 57%;
    width: 3.35vw;
  }

  .road-walk :global(.person-2) {
    right: 34vw;
    bottom: 50%;
    width: 4vw;
  }

  .road-walk :global(.person-3) {
    left: 1vw;
    bottom: 73%;
    width: 3vw;
  }

  .road-walk :global(.bushes) {
    position: absolute;
    height: 64%;
    width: auto;
    bottom: -2px;
    right: 33.25vw;
  }

  .road-scooter,
  .road-bike {
    background-color: #ededed;
    position: relative;
    z-index: 4;
  }

  .road-scooter {
    z-index: 4;
  }

  @keyframes move-left {
    to {
      transform: translateX(-100vw);
    }
  }

  @keyframes move-right {
    0% {
      transform: translateX(0vw);
    }
    20% {
      transform: translateX(25vw);
    }
    40% {
      transform: translateX(50vw);
      opacity: 1;
    }
    60% {
      transform: translateX(75vw);
    }
    78% {
      opacity: 1;
    }
    79% {
      opacity: 0;
    }
    80% {
      transform: translateX(100vw);
      opacity: 0;
    }
    81% {
      opacity: 0;
    }
    82% {
      transform: translateX(-25vw);
      opacity: 0;
    }
    83% {
      opacity: 1;
    }

    100% {
      opacity: 1;
      transform: translateX(0vw);
    }
  }

  .road-scooter :global(.scooter) {
    width: 4.5vw;
    position: absolute;
    bottom: 44%;
    right: 19vw;
  }

  .road-scooter :global(.bushes) {
    position: absolute;
    height: 123%;
    width: auto;
    bottom: -1px;
    right: 13.25vw;
  }

  .road-bike {
    z-index: 6;
    border-top-width: 3px;
  }

  .road-bike :global(.biker) {
    width: 33.5vw;
    position: absolute;
    bottom: 20%;
    left: 1vw;
    animation: move-right 20s linear forwards;
    animation-iteration-count: infinite;
  }

  .road-cars {
    background-color: #706f6f;
    position: relative;
    z-index: 5;
  }

  .road-cars :global(.bus) {
    position: absolute;
    bottom: 68%;
    width: 61vw;
    left: 2.8vw;
  }

  .road-cars :global(.bushes) {
    position: absolute;
    width: 36vw;
    bottom: -5px;
    left: -4vw;
  }

  /* Clouds & sky */
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
      transform: translateX(50vw);
    }

    to {
      transform: translateX(0);
    }
  }

  .clouds {
    z-index: 1;
  }

  .cloud-1 {
    width: calc(100vw * 127 / 1440);
    top: calc(64vh * 59 / 555);
    left: 20vw;
    animation-name: move-clouds-1;
    animation-duration: 90s;
    animation-delay: 4s;
  }

  .cloud-2 {
    width: calc(100vw * 104 / 1440);
    top: calc(64vh * 131 / 555);
    right: calc(100vw * 108 / 1440);
    animation-name: move-clouds-2;
    animation-duration: 240s;
    animation-delay: 3s;
  }

  .cloud-3 {
    width: calc(100vw * 156 / 1440);
    top: calc(64vh * 213 / 555);
    left: calc(100vw * 246 / 1440);
    transform: translateX(0) scaleX(-1);
    animation-name: move-clouds-3;
    animation-duration: 100s;
    animation-direction: alternate-reverse;
    animation-delay: 2.5s;
  }

  .bird-1 {
    top: calc(64vh * 70 / 555);
    left: calc(100vw * 35 / 1440);
  }

  .bird-2 {
    top: calc(64vh * 121 / 555);
    left: calc(100vw * 490 / 1440);
  }

  .bird-3 {
    width: 1.85rem;
    top: calc(64vh * 185 / 555);
    right: 7.5vw;
    opacity: 0.8;
  }

  /* Text */
  .text {
    display: flex;
    justify-content: center;
    bottom: 38vh;
    z-index: 10;
    padding-right: calc(100vw * 280 / 1440);
    padding-left: calc(100vw * 660 / 1440);
    width: 100%;
  }

  .text__inside {
    flex: 0 1 25rem;
  }

  /* Foreground */
  .mobility :global(.foreground) {
    max-height: 33vh;
    width: auto;
    max-width: 73vw;
    height: auto;
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 10;
  }

  /* Mobile */
  @media only screen and (max-width: 768px) {
    .road-bike :global(.biker) {
      width: 85.5vw;
      left: -29vw;
    }

    .road-cars :global(.bushes) {
      width: 106vw;
    }

    .road-cars :global(.bus) {
      position: absolute;
      bottom: 21%;
      width: 235vw;
      left: 74.8vw;
    }

    .road-scooter :global(.bushes) {
      right: 83.25vw;
    }

    .road-scooter :global(.scooter) {
      width: 15.5vw;
      right: 36vw;
    }

    .road-cars {
      height: 13vh;
    }

    .roads {
      flex: 1 1 9vh;
    }

    .road-walk {
      height: 5vh;
    }

    .road-walk :global(.person-3) {
      left: -3.8vw;
      bottom: 45%;
      width: 9vw;
    }

    .road-walk :global(.person-2) {
      display: none;
    }

    .road-walk :global(.person-1) {
      display: none;
    }

    .text__inside {
      transform: translateZ(-0.2px) scale(1.02);
      width: 100%;
      max-width: 92rem;
      padding-left: 1.5rem;
      padding-right: 1.5rem;
      position: absolute;
    }

    .text {
      bottom: 50vh;
      padding: 0;
    }

    .cloud-1 {
      display: none;
    }

    .cloud-3 {
      display: none;
    }

    .bird-1 {
      display: none;
    }

    .bird-2 {
      display: none;
    }

    .cloud-2 {
      width: 30vw !important;
      right: -10vw !important;
    }

    .bird-3 {
      width: 1rem;
      right: 19vw;
    }
  }

  /* iPhone X */
  @media only screen and (max-width: 380px) and (min-height: 740px) {
    .roads {
      flex: 2 1 9vh;
    }

    .text {
      bottom: 55vh;
      padding: 0;
    }
  }

  /* Tablet */
  @media only screen and (min-width: 540px) and (max-width: 768px) and (min-height: 720px) {
    .text__inside {
      top: 6vh;
    }
  }
</style>
