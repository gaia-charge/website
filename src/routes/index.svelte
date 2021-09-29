<script>
  import { onMount } from "svelte";
  import { _, locale } from "svelte-i18n";
  import ContactSubmitted from "./../components/ContactSubmitted.svelte";
  import { getCookie } from "./../services/cookie";
  import { startClient } from "../services/i18n";

  let whiteBackground = true;
  let activeContact = false;
  let stopAnimationCharcing = false;
  let stopAnimationMobility = false;
  let stopAnimationEnergy = false;
  let y;

  export let showPopup = false;

  startClient();
  if (!$locale) {
    $locale = getCookie("locale") || "en";
  }

  const updateVh = () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  };

  const updateBackgroundHeader = (visibility) => {
    whiteBackground = visibility;
  };

  const updateActiveSection = (id) => {
    document.querySelectorAll(".nav__link").forEach((el) => {
      el.classList.remove("active");
      stopAnimationCharcing = true;
      stopAnimationMobility = true;
      stopAnimationEnergy = true;
    });

    if (id == "visibleCharging") stopAnimationCharcing = false;
    else if (id == "visibleMobility") stopAnimationMobility = false;
    else if (id == "visibleEnergy") stopAnimationEnergy = false;

    if (id == "visibleContact") {
      activeContact = true;
    } else {
      activeContact = false;
      document.getElementById(`-${id}`).classList.add("active");
    }
  };

  onMount(async () => {
    // Update active section if the h2 is visible
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute("id");

        if (id == "scrollMenu") {
          updateBackgroundHeader(entry.intersectionRatio);
          return false;
        }

        if (entry.intersectionRatio > 0 && document.getElementById(`-${id}`))
          updateActiveSection(id);
      });
    });

    [...document.querySelectorAll('a[href^="#"]')].map(
      (x) => (x.href = document.location + new URL(x.href).hash)
    );

    // Track all sections
    document.querySelectorAll("h2[id]").forEach((section) => {
      observer.observe(section);
    });
    observer.observe(document.getElementById("scrollMenu"));

    updateVh();
    window.addEventListener("resize", updateVh);
  });

  import Header from "../components/Header.svelte";
  import BaseWrapper from "../components/BaseWrapper.svelte";
  import Charging from "../components/Charging.svelte";
  import Mobility from "../components/Mobility.svelte";
  import Energy from "../components/Energy.svelte";
  import Contact from "../components/Contact.svelte";
  import Footer from "../components/Footer.svelte";

  import Bottom from "../svg/3_bottom.svelte";

  function handleScrollY(e) {
    y = e.target.scrollTop;
  }
</script>

<svelte:head>
  <title>Gaia Green Tech</title>
</svelte:head>

<svelte:window on:scroll={handleScrollY} />

<svg style="display: none" fill="none" xmlns="http://www.w3.org/2000/svg">
  <symbol id="svg-cloud" viewBox="0 0 275 52">
    <path
      d="M0 51.36c2.84-17.22 17.12-30.33 34.32-30.33A33.7 33.7 0 0156.8 29.7C68.6 11.84 87.4.29 108.6.29c21.2 0 40.03 11.56 51.82 29.42a33.34 33.34 0 0128.24-15.81c13.14 0 24.5 7.74 30.01 19.01 6-4.5 13.6-7.2 21.9-7.2 16.73 0 30.67 10.99 34.1 25.65H0z"
      fill="#fff"
      stroke="#79A5AA"
      stroke-width="2"
    />
  </symbol>
  <symbol id="svg-bird" viewBox="0 0 41 10">
    <path
      d="m1.35 10a.75.75 0 0 1 -.21 0 1 1 0 0 1 -.77-1.25 10.9 10.9 0 0 1 20.16-3.07 10.91 10.91 0 0 1 20.2 3 1 1 0 0 1 -.73 1.19 1 1 0 0 1 -1.19-.77 8.91 8.91 0 0 0 -17.31-.58 1 1 0 0 1 -1 .72 1 1 0 0 1 -1-.72 8.91 8.91 0 0 0 -17.25.65 1 1 0 0 1 -.9.83z"
      fill="#79a5aa"
    />
  </symbol>
</svg>

<Header {whiteBackground} {activeContact} />
<BaseWrapper onScroll={handleScrollY}>
  <span id="scrollMenu" />
  <section class="charging" id="charging">
    <Charging {stopAnimationCharcing} />
  </section>

  <section class="seam-1-2" />

  <section class="mobility" id="mobility">
    <Mobility {stopAnimationMobility} />
  </section>

  <section
    id="seam-2-3"
    class="seam-2-3"
    style="transform: translate(0,{-y * 0.2}px)"
  />

  <div class="bottom">
    <section style="z-index: 10 !important;" id="energy">
      <Energy />
    </section>

    <section style="z-index:12;" id="contact">
      <Contact bind:showPopup />
    </section>

    <Bottom {stopAnimationEnergy} />

    <div class="bg-green" />

    <Footer />
  </div>
</BaseWrapper>

{#if showPopup}
  <ContactSubmitted bind:showPopup />
{/if}

<style>
  /* Parallax */
  section {
    position: relative;
  }

  .charging {
    z-index: 2 !important;
    height: 130vh;
    background: linear-gradient(0deg, #daf9f9, #daf9f9);
  }

  .seam-1-2 {
    background-image: url(/seam_section_1_2.svg);
    background-size: cover;
    height: calc(53vh + 12vw);
    width: 100vw;
    bottom: -32vh;
    position: absolute;
    z-index: 2 !important;
    -webkit-transform: translateZ(0.8px) scale(0.8);
    transform: translateZ(0.8px) scale(0.8);
    overflow-y: hidden;
  }

  .seam-2-3 {
    background-image: url(/seam_section_2_3.svg);
    background-size: cover;
    z-index: 2 !important;
    height: calc(80vh + 10vw);
    width: 103vw;
    bottom: -212vh;
    left: -2vw;

    position: absolute;
    z-index: 6 !important;
    will-change: transform;

    overflow-y: hidden;
  }

  .mobility {
    z-index: 2 !important;
    height: 125vh;
  }

  .bottom {
    position: relative;
  }

  .bg-green {
    height: 100%;
    background-color: #ccf06b;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
  }

  @media only screen and (max-width: 768px) {
    .seam-2-3 {
      width: 135vw;
      left: -25vw;
      bottom: -215vh;
      height: calc(74vh + 10vw);
    }

    .mobility {
      height: 120vh;
    }
  }

  /* Tablet */
  @media only screen and (min-width: 540px) and (max-width: 768px) and (min-height: 720px) {
    .seam-1-2 {
      top: 65vh !important;
      width: 100.5vw;
    }
  }

  /* iPad Pro */
  @media only screen and (min-width: 900px) and (max-width: 1124px) and (min-height: 1150px) {
    .seam-2-3 {
      height: calc(97vh + 11vw);
    }

    .charging {
      height: 110vh;
    }
  }
</style>
