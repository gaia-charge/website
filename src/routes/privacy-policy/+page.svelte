<script>
  import { _, isLoading } from "svelte-i18n";
  import { Card } from "attractions";
  import Header from "../../components/Header.svelte";
  import BaseWrapper from "../../components/BaseWrapper.svelte";
  import Footer from "../../components/Footer.svelte";
</script>

<svelte:head>
  <title
    >{$isLoading
      ? ""
      : $_("privacy-policy.head", { default: "Privacy Policy" })} - Gaia Green Tech</title
  >
</svelte:head>

{#if !$isLoading}
  <Header whiteBackground={false} />

  <BaseWrapper onScroll={() => {}}>
    <div class="content">
      <div class="container">
        <p class="subtitle">
          <strong
            >{$_("privacy-policy.subtitle", {
              default: "Gaia Green Tech's",
            })}</strong
          >
        </p>
        <h2
          class="title"
          style="display: flex; justify-content: space-between; align-items: center;"
        >
          {$_("privacy-policy.title", { default: "Privacy Policy" })}
        </h2>
        <div>
          <Card style="padding: 2em;">
            <div style="">
              <p>
                At Gaia Green Tech, accessible from https://gaiagreen.tech/, one
                of our main priorities is the privacy of our visitors. This
                Privacy Policy document contains types of information that is
                collected and recorded by Gaia Green Tech and how we use it.
              </p>

              <p>
                If you have additional questions or require more information
                about our Privacy Policy, do not hesitate to contact us.
              </p>

              <h2>Log Files</h2>

              <p>
                Gaia Green Tech follows a standard procedure of using log files.
                These files log visitors when they visit websites. All hosting
                companies do this and a part of hosting services' analytics. The
                information collected by log files include internet protocol
                (IP) addresses, browser type, Internet Service Provider (ISP),
                date and time stamp, referring/exit pages, and possibly the
                number of clicks. These are not linked to any information that
                is personally identifiable. The purpose of the information is
                for analyzing trends, administering the site, tracking users'
                movement on the website, and gathering demographic information.
                Our Privacy Policy was created with the help of the <a
                  href="https://www.privacypolicygenerator.org"
                  >Privacy Policy Generator</a
                >.
              </p>

              <h2>Privacy Policies</h2>

              <p>
                You may consult this list to find the Privacy Policy for each of
                the advertising partners of Gaia Green Tech.
              </p>

              <p>
                Third-party ad servers or ad networks uses technologies like
                cookies, JavaScript, or Web Beacons that are used in their
                respective advertisements and links that appear on Gaia Green
                Tech, which are sent directly to users' browser. They
                automatically receive your IP address when this occurs. These
                technologies are used to measure the effectiveness of their
                advertising campaigns and/or to personalize the advertising
                content that you see on websites that you visit.
              </p>

              <p>
                Note that Gaia Green Tech has no access to or control over these
                cookies that are used by third-party advertisers.
              </p>

              <h2>Third Party Privacy Policies</h2>

              <p>
                Gaia Green Tech's Privacy Policy does not apply to other
                advertisers or websites. Thus, we are advising you to consult
                the respective Privacy Policies of these third-party ad servers
                for more detailed information. It may include their practices
                and instructions about how to opt-out of certain options.
              </p>

              <p>
                You can choose to disable cookies through your individual
                browser options. To know more detailed information about cookie
                management with specific web browsers, it can be found at the
                browsers' respective websites.
              </p>

              <h2>Children's Information</h2>

              <p>
                Another part of our priority is adding protection for children
                while using the internet. We encourage parents and guardians to
                observe, participate in, and/or monitor and guide their online
                activity.
              </p>

              <p>
                Gaia Green Tech does not knowingly collect any Personal
                Identifiable Information from children under the age of 13. If
                you think that your child provided this kind of information on
                our website, we strongly encourage you to contact us immediately
                and we will do our best efforts to promptly remove such
                information from our records.
              </p>

              <h2>Online Privacy Policy Only</h2>

              <p>
                This Privacy Policy applies only to our online activities and is
                valid for visitors to our website with regards to the
                information that they shared and/or collect in Gaia Green Tech.
                This policy is not applicable to any information collected
                offline or via channels other than this website.
              </p>

              <h2>Consent</h2>

              <p>
                By using our website, you hereby consent to our Privacy Policy
                and agree to its Terms and Conditions.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
    <Footer />
  </BaseWrapper>
{/if}

<style>
  .content {
    background: linear-gradient(0deg, #daf9f9, #daf9f9);
    min-height: calc(100% - 6.5rem);
    padding-bottom: 4em;
    padding-top: 7em;
    scroll-snap-type: y mandatory;
  }
</style>
