/** @type {import('@sveltejs/kit').Handle} */
import { i18nMiddleware } from "./services/i18n.js";

export async function handle({ request, resolve }) {
  i18nMiddleware(request);
  const response = await resolve(request);
  return response;
}
