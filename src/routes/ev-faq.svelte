<script>
  import { locale, _ } from "svelte-i18n";
  import Header from "../components/Header.svelte";
  import BaseWrapper from "../components/BaseWrapper.svelte";
  import Footer from "../components/Footer.svelte";
  import { onMount } from "svelte";
  import { startClient } from "../services/i18n";

  const initialLocale = startClient();
  if (!$locale) {
    $locale = initialLocale;
  }

  const petrolPrice = 1.45;
  const dieselPrice = 1.333;
  const electricityPrice = 0.35;
  const discountedElectricityPrice = 0.035;
  let downloadUrl = "https://ggrn.link/ev-faq-pdf-";
</script>

<svelte:head>
  <title>{$_("ev-faq.head", { default: "EV FAQ" })} - Gaia Green Tech</title>
</svelte:head>

<Header whiteBackground={false} activeContact={false} />

<BaseWrapper onScroll={() => {}}>
  <div class="content">
    <div class="container">
      <p class="subtitle">
        <strong
          >{$_("ev-faq.subtitle", {
            default: "Gaia Green Tech answers",
          })}</strong
        >
      </p>
      <h2 class="title">
        {$_("ev-faq.title1", { default: "Frequently asked questions" })}<br />
        {$_("ev-faq.title2", { default: "about electric vehicles" })}
      </h2>
      <div class="lead">
        <p>
          {$_("ev-faq.lead", {
            default:
              "In our daily interactions with people interested in EVs, we receive a lot of questions. We decided to compile the answers into a neat, visual flyer for everyone.",
          })}
        </p>
      </div>
      <div>
        <a href="{downloadUrl}{$locale}" class="download"
          >{$_("download", { default: "Download" })}</a
        >
      </div>
      <div class="footnotes">
        <h3 class="title-small">
          {$_("ev-faq.footnotes", { default: "Footnotes" })}
        </h3>
        <div class="lead">
          <ol>
            <li>
              <a href="https://ev-database.org/" target="_blank">EV Database</a>
            </li>
            <li>
              <a
                href="https://cyberleninka.org/article/n/1435084.pdf"
                target="_blank"
                >Mobility data across the EU 28 member states: results from an
                extensive CAWI survey</a
              >
            </li>
            <li>
              <a
                href="https://ev-database.org/car/1531/Volkswagen-ID3-Pro#charge-table"
                target="_blank">Volkswagen ID.3 Pro - EV Database</a
              >
            </li>
            <li>
              <a
                href="https://www.honestjohn.co.uk/realmpg/volkswagen/golf-2013"
                target="_blank">Volkswagen Golf (2013-2020) real MPG</a
              >
            </li>
            <li>
              {$_("ev-faq.petrol-price", {
                default: "Assuming an average price of {price}€ per litre",
                values: { price: petrolPrice },
              })}
            </li>
            <li>
              {$_("ev-faq.diesel-price", {
                default: "Assuming an average price of {price}€ per litre",
                values: { price: dieselPrice },
              })}
            </li>
            <li>
              {$_("ev-faq.electricity-price", {
                default: "Assuming an average price of {price}€ per kW",
                values: { price: electricityPrice },
              })}
            </li>
            <li>
              {$_("ev-faq.discounted-electricity-price", {
                default:
                  "Assuming an average price of {price}€ per kW when charging during the night with an EV specific tariff",
                values: { price: discountedElectricityPrice },
              })}
            </li>
            <li>
              <a
                href="https://www.edmunds.com/nissan/leaf/2021/cost-to-own/"
                target="_blank">2021 Nissan LEAF Cost to Own</a
              >
            </li>
            <li>
              <a
                href="https://www.edmunds.com/volkswagen/golf/2021/cost-to-own/"
                target="_blank">2021 Volkswagen Golf Cost to Own</a
              >
            </li>
            <li>
              <a
                href="https://www.youtube.com/watch?v=1oVrIHcdxjA"
                target="_blank">EV or Gas, What Pollutes More?</a
              >
            </li>
            <li>
              <a
                href="https://www.carmagazine.co.uk/electric/how-long-do-electric-car-batteries-last/"
                target="_blank">How long do electric car batteries last?</a
              >
            </li>
            <li>
              <a
                href="https://www.autonews.com/automakers-suppliers/nissan-looks-ways-use-long-lasting-ev-batteries"
                target="_blank"
                >Nissan looks for ways to use long-lasting EV batteries</a
              >
            </li>
            <li>
              <a
                href="https://www.automotivemanufacturingsolutions.com/evs/ev-battery-recycling-cost-and-components/41287.article"
                target="_blank">EV battery recycling: cost and components</a
              >
            </li>
          </ol>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</BaseWrapper>

<style>
  .content {
    background: linear-gradient(0deg, #daf9f9, #daf9f9);
    min-height: calc(100% - 6.5rem);
    padding-bottom: 4em;
    padding-top: 7em;
  }

  .download {
    display: inline-block;
    line-height: 1;
    background-color: #4c8c40;
    border-radius: 2.5rem;
    padding: 0.875rem 1.5rem;
    color: #fff;
    text-decoration: none;
    text-align: center;
    margin: 1em 0;
  }

  .footnotes {
    margin-top: 1rem;
  }

  .footnotes ol {
    counter-reset: item;
    padding: 0;
    list-style: none;
  }

  .footnotes li:before {
    content: counter(item) ")";
    counter-increment: item;
    position: absolute;
    vertical-align: super;
    font-size: 0.75rem;
    left: 0;
    line-height: 1rem;
    display: inline-block;
    width: 1.5em;
    text-align: right;
  }

  .footnotes li {
    position: relative;
    display: block;
    padding: 0em 0em 0em 1.5em;
  }

  @media only screen and (max-width: 768px) {
    .content {
      padding-top: 5em;
    }
  }
</style>
