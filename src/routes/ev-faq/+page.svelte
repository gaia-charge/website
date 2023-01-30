<script>
  import { locale, _, isLoading } from "svelte-i18n";
  import Header from "../../components/Header.svelte";
  import BaseWrapper from "../../components/BaseWrapper.svelte";
  import Footer from "../../components/Footer.svelte";

  // https://www.dieselogasolina.com/
  const petrolPrice = 1.671;
  const dieselPrice = 1.796;
  // Average for 22kW from https://docs.google.com/spreadsheets/d/1fvMvEKxGC0pPVYib0rsgsMTmzox7Oz-GRjrfefLIjmg/edit#gid=824064001
  const electricityPrice = 0.32;
  // https://www.iberdrola.es/webclipb/iberdrola/smart-mobility/plan-vehiculo-electrico
  const discountedElectricityPrice = 0.031657;

  const updatedOn = "30/01/2022";
  let downloadUrl = "https://ggrn.link/ev-faq-pdf-";
</script>

<svelte:head>
  <title
    >{$isLoading ? "" : $_("ev-faq.head", { default: "EV FAQ" })} - Gaia Green Tech</title
  >
</svelte:head>

{#if !$isLoading}
  <Header whiteBackground={false} activeSection="mobility" />

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
        <div class="preview">
          <img src="/ev-faq-{$locale}.png" alt="EV FAQ" />
          <a href="{downloadUrl}{$locale}" class="download"
            >{$_("download", { default: "Download" })}</a
          >
        </div>
        <div class="footnotes">
          <h3 class="title-small">
            {$_("ev-faq.footnotes.title", { default: "Footnotes" })}
          </h3>
          <div class="lead">
            <ol>
              <li>
                <a
                  href="https://ev-database.org/"
                  target="_blank"
                  rel="noreferrer">EV Database</a
                >
              </li>
              <li>
                {@html $_("ev-faq.footnotes.2a", {
                  default:
                    'According to <a href="{link}" target="_blank">a CAWI study</a>, the <strong>average daily trip by car in the EU is about 20km</strong>',
                  values: {
                    link: "https://cyberleninka.org/article/n/1435084.pdf",
                  },
                })}.
                {@html $_("ev-faq.footnotes.2b", {
                  default:
                    "Assuming the 250km range, you would need to charge it about every 2 weeks",
                })}.
                {@html $_("ev-faq.footnotes.2c", {
                  default:
                    "Of course this depends on your situation but on average trips over 300km are very rare",
                })}.
                {@html $_("ev-faq.footnotes.2d", {
                  default:
                    "<strong>40% of drivers only do one or two trips over 300km a year</strong>, and just 20% do it three or more times",
                })}.
              </li>
              <li>
                <a
                  href="https://ev-database.org/car/1531/Volkswagen-ID3-Pro#charge-table"
                  rel="noreferrer"
                  target="_blank">Volkswagen ID.3 Pro - EV Database</a
                >.
                {$_("ev-faq.footnotes.3a", {
                  default:
                    "Note that the charge is usually done when you're not using the car anyway",
                })}.
                {$_("ev-faq.footnotes.3b", {
                  default:
                    "I.e. it’s parked for the night, you’re out shopping or you stopped on a trip to use the restrooms and have a break with a meal or coffee",
                })}.
                {$_("ev-faq.footnotes.3c", {
                  default: "At no point you should wait for the car to charge",
                })}.
              </li>
              <li>
                <a
                  href="https://www.honestjohn.co.uk/realmpg/volkswagen/golf-2013"
                  rel="noreferrer"
                  target="_blank">Volkswagen Golf (2013-2020) real MPG</a
                >
              </li>
              <li>
                {$_("ev-faq.petrol-price", {
                  default: "Assuming an average price of {price}€ per litre",
                  values: { price: petrolPrice },
                })} [{updatedOn}]
              </li>
              <li>
                {$_("ev-faq.diesel-price", {
                  default: "Assuming an average price of {price}€ per litre",
                  values: { price: dieselPrice },
                })} [{updatedOn}]
              </li>
              <li>
                {$_("ev-faq.electricity-price", {
                  default: "Assuming an average price of {price}€ per kWh",
                  values: { price: electricityPrice },
                })} [{updatedOn}]
              </li>
              <li>
                {$_("ev-faq.discounted-electricity-price", {
                  default:
                    "Assuming an average price of {price}€ per kWh when charging during the night with an EV specific tariff",
                  values: { price: discountedElectricityPrice },
                })} [{updatedOn}]
              </li>
              <li>
                {@html $_("ev-faq.footnotes.9a", {
                  default:
                    'EVs are also cheaper to maintain. Over 5 years of ownership, <a href="{linkLeaf}" target="_blank">Nissan Leaf</a> is over 500€ cheaper to maintain and service than a <a href="{linkGolf}" target="_blank">VW Golf</a>',
                  values: {
                    linkLeaf:
                      "https://www.edmunds.com/nissan/leaf/2021/cost-to-own/",
                    linkGolf:
                      "https://www.edmunds.com/volkswagen/golf/2021/cost-to-own/",
                  },
                })}.
                {$_("ev-faq.footnotes.9b", {
                  default:
                    "After that period of time, the cost to maintain an EV remains the same while the petrol and diesel costs grow rapidly",
                })}.
              </li>
              <li>
                <a
                  href="https://www.youtube.com/watch?v=1oVrIHcdxjA"
                  target="_blank"
                  rel="noreferrer">EV or Gas, What Pollutes More?</a
                >
              </li>
              <li>
                <a
                  href="https://www.carmagazine.co.uk/electric/how-long-do-electric-car-batteries-last/"
                  target="_blank"
                  rel="noreferrer">How long do electric car batteries last?</a
                >
              </li>
              <li>
                <a
                  href="https://www.autonews.com/automakers-suppliers/nissan-looks-ways-use-long-lasting-ev-batteries"
                  target="_blank"
                  rel="noreferrer"
                  >Nissan looks for ways to use long-lasting EV batteries</a
                >
              </li>
              <li>
                <a
                  href="https://www.automotivemanufacturingsolutions.com/evs/ev-battery-recycling-cost-and-components/41287.article"
                  target="_blank"
                  rel="noreferrer">EV battery recycling: cost and components</a
                >
              </li>
            </ol>
          </div>
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
  }

  .lead {
    width: 100%;
  }

  .preview {
    position: relative;
  }

  .preview img {
    width: calc(100vw - 4rem);
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
    position: absolute;
    left: calc(50% - 5rem);
    top: 50%;
    width: 10rem;
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

  @media only screen and (max-width: 380px) {
    .preview img {
      width: calc(100vw);
      margin-left: -2rem;
    }
  }
</style>
