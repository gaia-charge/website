<script>
  import { _, locale } from "svelte-i18n";

  export let whiteBackground;
  export let activeContact;

  let checkInput = false;

  function handleLiClick() {
    checkInput = false;
    return true;
  }
  function changeLocale(loc) {
    $locale = loc;
  }
</script>

<header class="header" class:whiteBackground={!whiteBackground}>
  <div class="container">
    <a href="/" class="header__link">
      <svg
        class="header__logo"
        width="122"
        height="35"
        viewBox="0 0 122 35"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m28.38 12.57h-13.14a2.78 2.78 0 0 0 -1.51.45 2.68 2.68 0 0 0 -1 1.2c3.85.7 10.68 2.55 14 7.32a11.2 11.2 0 0 1 1.71 9 2.82 2.82 0 0 0 1.89-.84 2.73 2.73 0 0 0 .77-1.93v-12.44a2.77 2.77 0 0 0 -2.75-2.76z"
          fill="#4c8c40"
        /><path
          d="m14.26 27.77a21.34 21.34 0 0 1 -1.63-3.41 9.54 9.54 0 0 1 3.45-18.44h12.82a2.76 2.76 0 0 0 2-.81 2.78 2.78 0 0 0 0-3.9 2.76 2.76 0 0 0 -2-.81h-12.82a15.06 15.06 0 1 0 0 30.11h.52a11.19 11.19 0 0 1 -2.34-2.74z"
          fill="#4c8c40"
        /><path
          d="m16.06 20.23c10.75 5.09 10.64 10.93 10.64 10.93 3.81-14.16-16.91-15.74-16.91-15.74 3 1.39 3 6.89 5.82 11.54s8.89 5.43 8.89 5.43a6.55 6.55 0 0 1 .36 2.7h1.14c-.22-8.9-9.94-14.86-9.94-14.86z"
          fill="#98c93f"
        /><path
          d="m42 12.21c0-7.73 5.05-12.21 11.17-12.21a9.77 9.77 0 0 1 3.92.75 9.92 9.92 0 0 1 3.32 2.25l-2.74 3.42a5.93 5.93 0 0 0 -4.32-1.86c-3.53 0-6 2.81-6 7.49s2.13 7.57 6.44 7.57a4.12 4.12 0 0 0 2.41-.7v-4h-3.82v-4.3h8.4v10.7a10.9 10.9 0 0 1 -7.56 2.8c-6.29.02-11.22-4.07-11.22-11.91z"
          fill="#4c8c40"
        /><path
          d="m72.31.43h6.2l7.19 23.28h-5.48l-3-11.78c-.64-2.33-1.22-5.09-1.86-7.51h-.14c-.56 2.45-1.17 5.18-1.8 7.51l-3 11.78h-5.31zm-2.46 13.66h11v4.08h-11z"
          fill="#4c8c40"
        /><path d="m90.72.43h5.17v23.28h-5.17z" fill="#4c8c40" /><path
          d="m108.37.43h6.21l7.19 23.28h-5.48l-3-11.78c-.64-2.33-1.25-5.09-1.86-7.51h-.14c-.56 2.45-1.17 5.18-1.81 7.51l-3 11.79h-5.29zm-2.45 13.66h11v4.08h-11z"
          fill="#4c8c40"
        /><g fill="#98c93f"
          ><path
            d="m43.14 31.14a3.61 3.61 0 0 1 3.61-3.95 3.22 3.22 0 0 1 2.34 1l-.88 1.09a2.06 2.06 0 0 0 -.64-.45 2 2 0 0 0 -.76-.15c-1.14 0-2 .91-2 2.42s.69 2.46 2.09 2.46a1.28 1.28 0 0 0 .78-.23v-1.33h-1.17v-1.4h2.71v3.47a3.66 3.66 0 0 1 -6.08-2.94z"
          /><path
            d="m52.63 27.34h2.67c1.57 0 2.86.55 2.86 2.34s-1.29 2.48-2.86 2.48h-1v2.71h-1.67zm2.54 3.47c.88 0 1.35-.39 1.35-1.13s-.47-1-1.35-1h-.86v2.1zm-.18.9 1.16-1.09 2.37 4.25h-1.88z"
          /><path
            d="m61.48 27.34h4.64v1.43h-3v1.51h2.53v1.43h-2.5v1.75h3.11v1.43h-4.78z"
          /><path
            d="m69.59 27.34h4.64v1.43h-3v1.51h2.55v1.43h-2.52v1.75h3.1v1.43h-4.77z"
          /><path
            d="m77.7 27.34h1.72l1.93 3.74.73 1.65c-.08-.79-.22-1.85-.22-2.74v-2.65h1.6v7.53h-1.67l-1.94-3.75-.73-1.65c.07.83.21 1.84.21 2.73v2.67h-1.6z"
          /><path d="m92.74 28.76h-2v-1.42h5.76v1.43h-2v6.1h-1.76z" /><path
            d="m99.49 27.34h4.65v1.43h-3v1.51h2.53v1.43h-2.53v1.75h3.08v1.43h-4.73z"
          /><path
            d="m107.24 31.14c0-2.5 1.62-3.95 3.5-3.95a3 3 0 0 1 1.21.26 3.16 3.16 0 0 1 1 .72l-.89 1.09a1.86 1.86 0 0 0 -1.3-.6c-1 0-1.82.91-1.82 2.42s.71 2.46 1.79 2.46a2 2 0 0 0 .8-.2 2 2 0 0 0 .65-.5l.88 1a3.22 3.22 0 0 1 -1.07.83 3 3 0 0 1 -1.32.27c-1.86.06-3.43-1.26-3.43-3.8z"
          /><path
            d="m116.09 27.34h1.68v2.9h2.56v-2.9h1.67v7.53h-1.68v-3.15h-2.55v3.15h-1.67z"
          /></g
        >
      </svg>
    </a>
    <nav id="navbar" class="nav">
      <input type="checkbox" id="check" bind:checked={checkInput} />
      <label for="check" class="checkbtn">
        <span />
      </label>
      <ul>
        <li on:click={handleLiClick}>
          <a id="-visibleCharging" href="/#charging" class="nav__link active">
            {$_("header.charging", { default: "Charging" })}
          </a>
        </li>
        <li on:click={handleLiClick}>
          <a id="-visibleMobility" href="/#mobility" class="nav__link">
            {$_("header.mobility", { default: "Mobility" })}
          </a>
        </li>
        <li on:click={handleLiClick}>
          <a id="-visibleEnergy" href="/#energy" class="nav__link">
            {$_("header.energy", { default: "Energy" })}
          </a>
        </li>
        <li on:click={handleLiClick}>
          <a
            id="-visibleContact"
            href="/#contact"
            class="nav__link is-contact"
            class:is-contact-active={activeContact}
          >
            {$_("header.contact", { default: "Contact" })}
          </a>
        </li>

        <li on:click={handleLiClick}>
          <a
            href="/"
            class="nav__link"
            class:is-active={$locale == "en" ? true : false}
            on:click|preventDefault={() => changeLocale("en")}
          >
            EN
          </a>
          <a
            href="/"
            class="nav__link"
            class:is-active={$locale == "es" ? true : false}
            on:click|preventDefault={() => changeLocale("es")}
          >
            ES
          </a>
          <a
            href="/"
            class="nav__link"
            class:is-active={$locale == "val" ? true : false}
            on:click|preventDefault={() => changeLocale("val")}
          >
            VAL
          </a>
          <a
            href="/"
            class="nav__link"
            class:is-active={$locale == "pl" ? true : false}
            on:click|preventDefault={() => changeLocale("pl")}
          >
            PL
          </a>
        </li>
      </ul>
    </nav>
  </div>
</header>

<style>
  /* Header */
  .header__link {
    z-index: 2;
  }

  .whiteBackground {
    background-color: white;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.05);
  }

  .is-contact-active {
    background-color: white !important;
    color: #6c9b64 !important;
    border: 2px solid #6c9b64 !important;
    font-weight: 800 !important;
    padding: calc(0.875rem - 2px) 1.5rem !important;
    margin-left: 0 !important;
  }

  .header {
    padding: 0.5vh 0;
    left: 0;
    right: 0;
    position: fixed;
    z-index: 100;
  }

  .header .container,
  .nav {
    display: flex;
    align-items: center;
  }

  .nav {
    margin-left: auto;
    font-size: 1rem;
    display: flex;
    justify-content: flex-end;
    font-family: Inter;
  }

  .nav__link {
    text-decoration: none;
    color: #385365;
    font-weight: 400;
  }

  ul li .nav__link + ul li .nav__link {
    margin-left: 2rem;
  }
  li + li {
    margin-left: 2rem;
  }
  li a + a {
    margin-left: 1rem;
  }

  :global(.nav__link.active) {
    font-weight: 800 !important;
  }

  :global(.nav__link.is-active) {
    font-weight: 800 !important;
  }

  .nav__link.is-contact {
    display: block;
    line-height: 1;
    background-color: #4c8c40;
    border-radius: 2.5rem;
    padding: 0.875rem 1.5rem;
    color: #fff;
    margin-left: 5px;
  }

  /* Mobile */
  nav ul li {
    display: inline-block;
  }

  .checkbtn {
    float: right;
    line-height: 80px;
    cursor: pointer;
    display: none;
    z-index: 2;
  }

  .checkbtn span {
    width: 24px;
    height: 18px;
    background: url(/menu.svg) left top no-repeat;
    display: block;
  }

  #check {
    display: none;
  }

  @media only screen and (max-width: 768px) {
    header {
      padding: 1.5vh 0 !important;
    }

    .checkbtn {
      display: block;
    }

    ul {
      position: fixed;
      width: 100%;
      height: 100vh;
      background: white;
      left: calc(100% + 12px);
      top: 0px;
      text-align: center;
      transition: all 0.5s;
      z-index: 1;
      margin: 0;
      padding: 2rem;
      padding-top: 20vh;
    }

    nav ul li {
      display: block;
      margin: 50px 0;
      line-height: 30px;
    }

    nav ul li a {
      font-size: 20px;
    }

    #check:checked ~ ul {
      left: 0px;
    }

    #check:checked ~ label > span {
      background: url(/exit_menu.svg) left top no-repeat;
    }

    .nav__link {
      font-size: 22px;
      line-height: 30px;
    }
  }

  /* Tablet */
  @media only screen and (min-width: 540px) and (max-width: 768px) and (min-height: 720px) {
    header {
      padding: 1.5vh 0 !important;
    }
  }
</style>
