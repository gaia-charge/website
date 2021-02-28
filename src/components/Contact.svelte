<script>
  import ContactForm from "../components/ContactForm.svelte";
  import { _ } from "svelte-i18n";

  export let showPopup;
</script>

<div class="scene contact">
  <div class="text">
    <div class="text__inside">
      <h2 class="title" id="visibleContact">
        {$_("contact.title", { default: "Let's connect!" })}
      </h2>
      <div class="lead">
        <p>
          {$_("contact.lead", {
            default:
              "Feel free to send us a message or check out our social media. We're happy to chat!",
          })}
        </p>
      </div>

      <ContactForm bind:showPopup />
    </div>
  </div>
</div>

<style>
  .contact {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    flex-direction: column;
    position: relative;
    background: none;
    z-index: 6;
    width: 100%;
    height: 90vh;
    min-height: 60vw;
    overflow: hidden;
  }

  .contact .text {
    padding-top: 10vh;
    position: relative;
    top: 0;
    left: 0;
    justify-content: flex-end;
  }

  .contact .text__inside {
    width: 38vw;
    margin-right: 21vw;
  }

  .contact .lead {
    margin-bottom: 4.5vh;
  }

  /* MOBILE */
  @media only screen and (max-width: 768px) {
    .contact .text__inside {
      width: 92vw;
      margin-right: 1rem;
      margin-left: 1rem;
      padding-top: 15vh;
    }

    .contact {
      height: 100vh;
    }
  }
</style>
