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
      <p class="updated">Last updated: 5 July 2026</p>

      <h2>Introduction</h2>

      <p>
        This Privacy Policy explains how Gaia Charge collects, uses, stores and
        protects your personal data when you visit https://gaiacharge.com/ or
        buy our electric-vehicle (EV) charging products and services. We process
        your personal data in line with Regulation (EU) 2016/679 (the General
        Data Protection Regulation, &ldquo;GDPR&rdquo;), Spanish Organic Law
        3/2018 of 5 December on the Protection of Personal Data and Guarantee of
        Digital Rights (&ldquo;LOPDGDD&rdquo;), and Law 34/2002 of 11 July on
        Information Society Services and Electronic Commerce
        (&ldquo;LSSI-CE&rdquo;).
      </p>

      <p>
        Please read this policy carefully. By using our website and services,
        you confirm that you have read and understood how we handle your
        personal data.
      </p>

      <h2>Data Controller</h2>

      <p>The data controller responsible for your personal data is:</p>

      <p class="entity">
        Gaia Charge SL<br />
        NIF: B21797311<br />
        Calle de Felipe Salvador 11, Pta 9<br />
        46022 Valencia, Spain<br />
        Phone: +34 960 135 709<br />
        Email:
        <a href="mailto:support@gaiacharge.com">support@gaiacharge.com</a>
      </p>

      <p>
        If you have questions about this policy or want to exercise your rights,
        contact us using the details above.
      </p>

      <h2>What Personal Data We Collect</h2>

      <p>
        Depending on how you interact with us, we may collect the following
        types of personal data:
      </p>

      <ul>
        <li>
          <strong>Identification and contact data</strong>, such as your name,
          surname, email address, telephone number, and postal or billing
          address.
        </li>
        <li>
          <strong>Billing and transaction data</strong>, such as your order
          details, purchase history, the products or services you buy, amounts
          paid, invoicing information, and payment confirmation. We do not store
          your full card details; these are handled directly by our payment
          processor (see &ldquo;Who We Share Your Data With&rdquo;).
        </li>
        <li>
          <strong>Account data:</strong> if you create an account, the credentials
          and preferences linked to it.
        </li>
        <li>
          <strong>Technical and navigation data</strong>, such as your IP
          address, browser type and version, device information, operating
          system, referring pages, and the date and time of your visit. This is
          collected automatically through server logs and cookies.
        </li>
        <li>
          <strong>Communications data:</strong> anything you tell us when you contact
          our support team, send us an email, or otherwise get in touch.
        </li>
      </ul>

      <h2>Why We Process Your Data and Our Legal Basis</h2>

      <p>
        We only process your personal data where we have a valid legal basis
        under Article 6 GDPR. The purposes and their legal bases are:
      </p>

      <ul>
        <li>
          To process and manage your orders, payments and any refunds, and to
          provide the products and services you buy.
          <strong>Legal basis:</strong> performance of a contract to which you are
          a party (Article 6(1)(b) GDPR).
        </li>
        <li>
          To meet our legal obligations, including tax, accounting and invoicing
          requirements. <strong>Legal basis:</strong> compliance with a legal obligation
          (Article 6(1)(c) GDPR).
        </li>
        <li>
          To send you commercial communications and marketing about our products
          and services, where you have opted in.
          <strong>Legal basis:</strong> your consent (Article 6(1)(a) GDPR).
        </li>
        <li>
          To use non-essential cookies and similar technologies for analytics
          and functionality. <strong>Legal basis:</strong> your consent (Article
          6(1)(a) GDPR and Article 22.2 LSSI-CE).
        </li>
        <li>
          To keep our website secure, prevent fraud, and analyse and improve how
          our services are used. <strong>Legal basis:</strong> our legitimate interest
          in running a secure and effective service (Article 6(1)(f) GDPR).
        </li>
        <li>
          To answer your enquiries and provide customer support.
          <strong>Legal basis:</strong> performance of a contract or our legitimate
          interest in responding to you (Article 6(1)(b) or 6(1)(f) GDPR).
        </li>
      </ul>

      <h2>Refunds and Digital Sales</h2>

      <p>
        Our sales are digital only. There are no cancellations or returns; only
        refunds apply. We process your transaction and payment data to complete
        your purchase and to handle any refund under Royal Legislative Decree
        1/2007 approving the consolidated text of the General Law for the
        Defence of Consumers and Users. The conditions that govern refunds are
        set out in our Terms and Conditions and Refund Policy, which are
        separate documents and not part of this Privacy Policy.
      </p>

      <h2>Is Providing Your Data Mandatory?</h2>

      <p>
        Providing certain personal data is a contractual requirement for
        completing a purchase. If you do not give us the identification, contact
        and billing data we ask for, we cannot process your order, deliver the
        service, issue an invoice, or handle a refund. Providing data for
        marketing is always optional and based on your consent; declining does
        not affect your ability to buy from us.
      </p>

      <h2>Who We Share Your Data With</h2>

      <p>
        We do not sell your personal data. We share it only with the recipients
        below, and only where necessary:
      </p>

      <ul>
        <li>
          <strong>Payment processor:</strong> payments are processed through MONEI
          (payment gateway). When you pay, your payment data is sent to and processed
          by MONEI as an independent recipient to complete the transaction and any
          refund.
        </li>
        <li>
          <strong>Hosting and IT service providers</strong> who host our website
          and store data on our behalf under a data processing agreement.
        </li>
        <li>
          <strong>Tax authorities and public bodies</strong>, where we are
          legally required to disclose information, for example to the Spanish
          Tax Agency (Agencia Tributaria).
        </li>
        <li>
          <strong>Professional advisers</strong>, such as accountants or legal
          advisers, where necessary and under appropriate confidentiality
          obligations.
        </li>
      </ul>

      <h2>International Data Transfers</h2>

      <p>
        We aim to keep your personal data within the European Economic Area
        (EEA). Where a recipient or service provider processes data outside the
        EEA, we put appropriate safeguards in place as required by Chapter V
        GDPR, such as an adequacy decision by the European Commission or
        Standard Contractual Clauses (SCCs). You can request more information
        about these safeguards using the contact details above.
      </p>

      <h2>How Long We Keep Your Data</h2>

      <p>
        We keep your personal data only for as long as we need it for the
        purposes it was collected for:
      </p>

      <ul>
        <li>
          Transaction, invoicing and accounting data is kept for the legally
          required period, which under the Spanish Commercial Code
          (C&oacute;digo de Comercio) and applicable tax legislation is
          generally six years.
        </li>
        <li>
          Account data is kept for as long as your account stays active. If you
          close your account, we delete or anonymise the data, except where we
          must keep certain records to meet legal obligations.
        </li>
        <li>
          Marketing data is kept until you withdraw your consent or object to
          receiving communications.
        </li>
        <li>
          Support and communications data is kept for as long as we need it to
          handle your enquiry and for a reasonable period afterwards.
        </li>
      </ul>

      <p>
        Once these periods expire, we securely delete or anonymise your personal
        data.
      </p>

      <h2>Your Rights</h2>

      <p>
        Under the GDPR and the LOPDGDD, you have the following rights over your
        personal data:
      </p>

      <ul>
        <li>
          The right of access, to confirm whether we process your data and get a
          copy of it.
        </li>
        <li>The right to rectification of inaccurate or incomplete data.</li>
        <li>
          The right to erasure (the &ldquo;right to be forgotten&rdquo;), to
          have your data deleted where the legal conditions are met.
        </li>
        <li>
          The right to restriction of processing in certain circumstances.
        </li>
        <li>
          The right to data portability, to receive your data in a structured,
          commonly used and machine-readable format.
        </li>
        <li>
          The right to object to processing based on our legitimate interests or
          to direct marketing.
        </li>
        <li>
          The right not to be subject to a decision based solely on automated
          processing, including profiling, that produces legal or similarly
          significant effects. We do not carry out this kind of automated
          decision-making.
        </li>
      </ul>

      <p>
        To exercise any of these rights, contact us at
        <a href="mailto:support@gaiacharge.com">support@gaiacharge.com</a>. We
        may ask you to verify your identity before we respond, and we will
        respond within the timeframes set by law.
      </p>

      <h2>Withdrawing Your Consent</h2>

      <p>
        Where we process your data based on your consent, you can withdraw that
        consent at any time. Withdrawing consent is as easy as giving it, for
        example by using the unsubscribe link in our emails or by contacting us
        at
        <a href="mailto:support@gaiacharge.com">support@gaiacharge.com</a>.
        Withdrawing consent does not affect the lawfulness of any processing we
        carried out before you withdrew it.
      </p>

      <h2>Right to Lodge a Complaint</h2>

      <p>
        If you believe we have not handled your personal data correctly, you
        have the right to lodge a complaint with the Spanish Data Protection
        Agency (Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos, AEPD), C/
        Jorge Juan 6, 28001 Madrid, Spain, website
        <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer"
          >www.aepd.es</a
        >. We would appreciate the chance to address your concerns directly
        first, so please feel free to contact us before you approach the AEPD.
      </p>

      <h2>Cookies</h2>

      <p>
        Our website uses cookies and similar technologies. Essential cookies are
        needed for the website to work and do not require consent. Non-essential
        cookies, such as those used for analytics, are only installed with your
        consent, which we request through our cookie banner in line with Article
        22.2 of the LSSI-CE. You can accept, reject or manage your choices at
        any time through the cookie banner or your browser settings.
      </p>

      <p>The cookies we use are:</p>

      <div class="table-wrap">
        <table class="cookie-table">
          <thead>
            <tr>
              <th>Cookie</th>
              <th>Provider</th>
              <th>Purpose</th>
              <th>Type</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>locale</td>
              <td>Gaia Charge (first-party)</td>
              <td
                >Remembers the language you selected so the site loads in your
                preferred language.</td
              >
              <td>Essential (functional)</td>
              <td>Session (deleted when you close your browser)</td>
            </tr>
            <tr>
              <td>_lfa</td>
              <td>Leadfeeder / Dealfront (third-party)</td>
              <td
                >Recognises returning visitors and the organisations that visit
                our website, for visitor analytics. Only set if you consent to
                analytics cookies.</td
              >
              <td>Analytics (requires consent)</td>
              <td>1 year</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        We also use Plausible Analytics to measure website traffic. Plausible is
        privacy-focused and does not use cookies or collect personal data.
      </p>

      <h2>Security Measures</h2>

      <p>
        We have put in place appropriate technical and organisational measures,
        as required by Article 32 GDPR, to protect your personal data against
        unauthorised access, loss, alteration or disclosure. These measures
        include encryption of data in transit, access controls, and secure
        handling of payment data through our certified payment provider. We take
        reasonable steps to safeguard your data, but no method of transmission
        over the internet is completely secure, and we cannot guarantee absolute
        security.
      </p>

      <h2>Minors</h2>

      <p>
        Our website and services are meant for adults and are not intended for
        minors. In line with Article 7 of the LOPDGDD, we do not knowingly
        collect personal data from anyone under the age of 14 without the
        authorisation of a parent or legal guardian. If you believe a minor
        under 14 has given us personal data, contact us at
        <a href="mailto:support@gaiacharge.com">support@gaiacharge.com</a> and we
        will take steps to delete that information promptly.
      </p>

      <h2>Changes to This Privacy Policy</h2>

      <p>
        We may update this Privacy Policy from time to time to reflect changes
        in our practices or in the law. Any updated version will be published on
        this page with a revised &ldquo;Last updated&rdquo; date. We encourage
        you to check this policy from time to time.
      </p>

      <h2>Contact Us</h2>

      <p>
        If you have any questions or concerns about this Privacy Policy or how
        we handle your personal data, contact us at:
      </p>

      <p class="entity">
        Gaia Charge SL<br />
        Calle de Felipe Salvador 11, Pta 9, 46022 Valencia, Spain<br />
        Email:
        <a href="mailto:support@gaiacharge.com">support@gaiacharge.com</a><br />
        Phone: +34 960 135 709
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

  .post .updated {
    font-style: italic;
    opacity: 0.7;
  }

  .post .entity {
    font-weight: 400;
  }

  .post ul {
    list-style: disc;
    padding-left: calc(40 / var(--ratio));
  }

  .post li {
    font-size: calc(18 / var(--ratio));
    line-height: calc(28 / var(--ratio));
    padding: calc(5 / var(--ratio)) calc(10 / var(--ratio));
    font-weight: 300;
  }

  .post strong {
    font-weight: 600;
  }

  .post a {
    text-decoration: underline;
  }

  .post .table-wrap {
    overflow-x: auto;
    padding: calc(10 / var(--ratio));
  }

  .post .cookie-table {
    width: 100%;
    border-collapse: collapse;
    font-size: calc(16 / var(--ratio));
    line-height: calc(24 / var(--ratio));
    font-weight: 300;
    text-align: left;
  }

  .post .cookie-table th,
  .post .cookie-table td {
    border: 1px solid rgba(0, 0, 0, 0.15);
    padding: calc(10 / var(--ratio)) calc(12 / var(--ratio));
    vertical-align: top;
  }

  .post .cookie-table th {
    font-weight: 600;
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
