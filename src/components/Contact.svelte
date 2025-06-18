<script>
  import { _, isLoading } from "svelte-i18n";
  import arrow_right from "$lib/assets/svg/arrow_right.svg";
  import schema from "./../schema";
  import { enhance } from '$app/forms';

  export let contactStatus;

  let values = {};
  let errors = {};
  let formBind;

  function handle({ formData, cancel }) {
    try {
      schema().validateSync(Object.fromEntries(formData), { abortEarly: false });
      errors = {};
    } catch (err) {
      errors = err.inner.reduce((acc, err) => {
        return { ...acc, [err.path]: err.message };
      }, {});
      cancel();
    }
  }
</script>

{#if !$isLoading}
  <div id="contact"></div>
  <div class="contact bg-medium-blue text-white flex flex-row">
    {#if contactStatus}
      <div class=" flex p-0 info w-full h-96 whitespace-pre-line">
        <h2 class="whitespace-pre-line m-auto">
          {#if contactStatus !== "error"}
            {$_("contact.thankYouMsg", {
              default:
                "Thank you for contacting us.\nWe will respond to you shortly",
            })}
          {:else}
            {$_("contact.msgError", {
              default: "There was an error.\n Please retry later",
            })}
          {/if}
        </h2>
      </div>
    {:else}
      <div class="info w-1/2 mt-6">
        <h2>
          {@html $_("contact.title", {
            default: "We are here for you",
          })}
        </h2>
        <p>
          {$_("contact.subtitle", {
            default:
              "Leave us your contact details and we will get in touch with you as soon as possible.",
          })}
        </p>
      </div>
      <div class="w-1/2 form-elements">
        <form
          bind:this={formBind}
          method="POST"
          use:enhance={handle}
        >
          <div class="flex flex-row flex-col">
            <label for="firstname"
              >{$_("contact.firstname", {
                default: "First name",
              })}</label
            >
            <input
              type="text"
              name="firstname"
              id="firstname"
              bind:value={values.firstname}
              placeholder={$_("contact.firstname")}
            />
            {#if errors.firstname}
              <span class="error">{errors.firstname}</span>
            {/if}
          </div>
          <div class="flex flex-row flex-col">
            <label for="lastname"
              >{$_("contact.lastname", {
                default: "Last name",
              })}</label
            >
            <input
              type="text"
              name="lastname"
              id="lastname"
              bind:value={values.lastname}
              placeholder={$_("contact.lastname")}
            />
            {#if errors.lastname}
              <span class="error">{errors.lastname}</span>
            {/if}
          </div>
          <div class="flex flex-row flex-col">
            <label for="company"
              >{$_("contact.company", {
                default: "Company",
              })}</label
            >
            <input
              type="text"
              name="company"
              id="company"
              bind:value={values.company}
              placeholder={$_("contact.company")}
            />
            {#if errors.company}
              <span class="error">{errors.company}</span>
            {/if}
          </div>
          <div class="flex flex-row flex-col">
            <label for="email"
              >{$_("contact.email", {
                default: "Email",
              })}</label
            >
            <input
              type="email"
              bind:value={values.email}
              name="email"
              id="email"
              placeholder={$_("contact.email")}
            />
            {#if errors.email}
              <span class="error">{errors.email}</span>
            {/if}
          </div>
          <div class="flex flex-row flex-col">
            <label for="phone"
              >{$_("contact.phone", {
                default: "Phone number",
              })}</label
            >
            <input
              type="tel"
              name="phone"
              id="phone"
              bind:value={values.phone}
              placeholder={$_("contact.phone")}
            />
            {#if errors.phone}
              <span class="error">{errors.phone}</span>
            {/if}
          </div>
          <div class="flex flex-row flex-col">
            <label for="message"
              >{$_("contact.message", {
                default: "Message",
              })}</label
            >
            <input
              type="text"
              name="message"
              id="message"
              bind:value={values.message}
              placeholder={$_("contact.message")}
            />
            {#if errors.message}
              <span class="error">{errors.message}</span>
            {/if}
          </div>
          <div class="submit flex mb-6">
            <button
              type="submit"
              class="contact ml-auto text-white bg-green border-green border-2 rounded-full flex items-center justify-between justify-end"
            >
              {$_("contact.cta", {
                default: "Send message",
              })}

              <img src={arrow_right} class="inline-block" alt="Contact" />
            </button>
          </div>
        </form>
      </div>
    {/if}
  </div>
{/if}

<style lang="postcss">
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
  .error {
    display: block;
    font-size: 12px;
    color: red;
  }
  @media only screen and (max-width: 431px) {
    .contact {
      width: 100% !important;
      height: auto;
      display: flex;
      flex-direction: column;
      gap: 24px;
      padding-block-start: 24px !important;
      padding-block-end: 24px !important;
    }
    .info {
      padding-left: 0;
      width: 100%;
    }
    .info h2 {
      font-size: 39px;
      line-height: 48px;
    }
    label {
      font-size: 14px;
      line-height: 24px;
      margin-bottom: calc(14 / var(--ratio));
      font-weight: 400;
    }
    input[type="text"],
    input[type="email"],
    input[type="tel"] {
      width: 100%;
      font-size: 14px;
      font-style: italic;
      font-weight: 400;
      line-height: 24px;
      padding-left: calc(30 / var(--ratio));
    }
    .submit {
      width: 60%;
      margin-inline-start: auto;
    }
    button[type="submit"] {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
    .form-elements {
      width: 100%;
    }
  }
</style>
