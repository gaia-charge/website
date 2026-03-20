<script>
  import { _, isLoading } from "svelte-i18n";
  import Nav from "../../components/Nav.svelte";
  import Footer from "../../components/Footer.svelte";
</script>

<svelte:head>
  <title
    >{$isLoading
      ? ""
      : $_("privacyPolicy.title", { default: "Privacy Policy" })} - Gaia Charge</title
  >
</svelte:head>

{#if !$isLoading}
  <Nav />

  <article>
    <div class="headline z-40 text-center">
      <h1>{$_("privacyPolicy.title")}</h1>
    </div>
    <div class="post mx-auto">
      <p>
        At Gaia Charge, accessible from https://gaiacharge.com/, one of our
        main priorities is the privacy of our visitors. This Privacy Policy
        document contains types of information that is collected and
        recorded by Gaia Charge and how we use it.
      </p>

      <p>
        If you have additional questions or require more information about
        our Privacy Policy, do not hesitate to contact us.
      </p>

      <h2>Log Files</h2>

      <p>
        Gaia Charge follows a standard procedure of using log files. These
        files log visitors when they visit websites. All hosting companies
        do this and a part of hosting services' analytics. The information
        collected by log files include internet protocol (IP) addresses,
        browser type, Internet Service Provider (ISP), date and time stamp,
        referring/exit pages, and possibly the number of clicks. These are
        not linked to any information that is personally identifiable. The
        purpose of the information is for analyzing trends, administering
        the site, tracking users' movement on the website, and gathering
        demographic information.
      </p>

      <h2>Privacy Policies</h2>

      <p>
        You may consult this list to find the Privacy Policy for each of the
        advertising partners of Gaia Charge.
      </p>

      <p>
        Third-party ad servers or ad networks uses technologies like
        cookies, JavaScript, or Web Beacons that are used in their
        respective advertisements and links that appear on Gaia Green Tech,
        which are sent directly to users' browser. They automatically
        receive your IP address when this occurs. These technologies are
        used to measure the effectiveness of their advertising campaigns
        and/or to personalize the advertising content that you see on
        websites that you visit.
      </p>

      <p>
        Note that Gaia Charge has no access to or control over these cookies
        that are used by third-party advertisers.
      </p>

      <h2>Third Party Privacy Policies</h2>

      <p>
        Gaia Charge's Privacy Policy does not apply to other advertisers or
        websites. Thus, we are advising you to consult the respective
        Privacy Policies of these third-party ad servers for more detailed
        information. It may include their practices and instructions about
        how to opt-out of certain options.
      </p>

      <p>
        You can choose to disable cookies through your individual browser
        options. To know more detailed information about cookie management
        with specific web browsers, it can be found at the browsers'
        respective websites.
      </p>

      <h2>Children's Information</h2>

      <p>
        Another part of our priority is adding protection for children while
        using the internet. We encourage parents and guardians to observe,
        participate in, and/or monitor and guide their online activity.
      </p>

      <p>
        Gaia Charge does not knowingly collect any Personal Identifiable
        Information from children under the age of 13. If you think that
        your child provided this kind of information on our website, we
        strongly encourage you to contact us immediately and we will do our
        best efforts to promptly remove such information from our records.
      </p>

      <h2>Online Privacy Policy Only</h2>

      <p>
        This Privacy Policy applies only to our online activities and is
        valid for visitors to our website with regards to the information
        that they shared and/or collect in Gaia Charge. This policy is not
        applicable to any information collected offline or via channels
        other than this website.
      </p>

      <h2>Consent</h2>

      <p>
        By using our website, you hereby consent to our Privacy Policy and
        agree to its Terms and Conditions.
      </p>
    </div>
  </article>

  <Footer />
{/if}

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
</style>
