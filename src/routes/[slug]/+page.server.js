import { env } from "$env/dynamic/private";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

const supportedLocales = ["en", "es"];
const defaultLocale = "en";

/** @type {import('./$types').LayoutServerLoad} */
export const load = async ({ cookies, request }) => {
  const res = match(
    new Negotiator({
      headers: {
        "accept-language": request.headers.get("accept-language") || "",
      },
    }).languages(),
    [...supportedLocales],
    defaultLocale,
  );
  //throw redirect(307, '/'+res);
};

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const fields = {};

    for (const el of data) {
      fields[el[0]] = el[1];
    }

    const response = await fetch(
      "https://hooks.zapier.com/hooks/catch/20427241/uo971g8/",
      {
        method: "POST",
        body: JSON.stringify({ fields }),
      },
    );


    const result = await response.json();
    let contactStatus = "thank-you";

    if (result.status > 201) {
      contactStatus = "error";
    }

    return {
      contactStatus,
    };
  },
};
