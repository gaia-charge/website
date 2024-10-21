import { env } from '$env/dynamic/private'
import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

const supportedLocales = ['en', 'es'];
const defaultLocale = 'en';

/** @type {import('./$types').LayoutServerLoad} */
export const load = async ({ cookies, request }) => {
  const res = match(
    new Negotiator({
      headers: { 'accept-language': request.headers.get('accept-language') || '' },
    }).languages(),
    [...supportedLocales],
    defaultLocale
  )
  //throw redirect(307, '/'+res);
}