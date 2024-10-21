import { getInitialLocale } from "../services/i18n";
/**
 * @type {import('@sveltejs/kit').LayoutLoad}
 */
export async function load({params}) {
  return {
    initialLocale: params.slug,
  };
}
