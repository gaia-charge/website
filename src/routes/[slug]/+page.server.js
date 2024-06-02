import { env } from '$env/dynamic/private'


// export async function load() {
  // const url = new URL(
  //   `https://api.hubapi.com/forms/v2/forms/${HUBSPOT_FORM_ID}`
  // );
  // const request = new Request(url, {
  //   method: "GET",
  //   headers: {
  //     "cache-control": "max-age=3600", // cache form response for 1 hour
  //     Authorization: `Bearer ${HUBSPOT_PRIVATE_APP_KEY}`,
  //   },
  // });

  // const response = await fetch(request);
  // const data = await response.json();

//   // return data;
//   return {};
// }

import {match} from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

const supportedLocales = ['en','es'];
const defaultLocale = 'en';

/** @type {import('./$types').LayoutServerLoad} */
export const load = async ({cookies, request}) => {
	const res = match(
		new Negotiator({
			headers: {'accept-language': request.headers.get('accept-language') || ''},
		}).languages(),
		[...supportedLocales],
		defaultLocale
	)
	//throw redirect(307, '/'+res);
}

export const actions = {
  submit: async ({ request }) => {
    const data = await request.formData();
    const fields = [];
    for (const el of data) {
      fields.push({
        name: el[0],
        value: el[1],
        objectTypeId: '0-1'
      });
    }
    // const result = await fetch(
    //   `https://api.hsforms.com/submissions/v3/integration/submit/${env.HUBSPOT_PORTAL_ID}/${env.HUBSPOT_FORM_ID}`,
    //   {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //       Authorization: `Bearer ${env.HUBSPOT_PRIVATE_APP_KEY}`,
    //     },
    //     body: JSON.stringify({data}),
    //   }
    // );
    const url = new URL(
      `https://api.hubapi.com/forms/v2/forms/${env.HUBSPOT_FORM_ID}`
    );
    const requestHS = new Request(url, {
      method: "GET",
      headers: {
        "cache-control": "max-age=3600", // cache form response for 1 hour
        Authorization: `Bearer ${env.HUBSPOT_PRIVATE_APP_KEY}`,
      },
    });

    const response = await fetch(requestHS);
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
