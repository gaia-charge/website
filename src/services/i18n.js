import {
  register,
  init,
  getLocaleFromNavigator,
  locale as $locale,
} from "svelte-i18n";

import { setCookie, getCookie } from "./cookie.js";

const INIT_OPTIONS = {
  fallbackLocale: "en",
  initialLocale: null,
  loadingDelay: 2000,
  formats: {},
  warnOnMissingMessages: false,
};

export let currentLocale = null;

register("en", () => import("./messages/en.json"));
register("es", () => import("./messages/es-ES.json"));

function languageFromLocale(locale) {
  return locale.split("-")[0];
}

$locale.subscribe((value) => {
  if (value == null) return;

  currentLocale = value;

  // if running in the client, save the language preference in a cookie
  if (typeof window !== "undefined") {
    setCookie("locale", value);
  }
});

// initialize the i18n library in client
export async function startClient(initialLocale) {
  console.log('startClient:func', initialLocale, INIT_OPTIONS)

  await init({
    ...INIT_OPTIONS,
    initialLocale,
  });
}

// try to find the correct locale to use
export function getInitialLocale() {
  let locale = getCookie("locale");
  // no cookie, let's get the first accepted language

  if (!locale) {
    locale = languageFromLocale(
      getLocaleFromNavigator() || INIT_OPTIONS.fallbackLocale
    );
  }

  console.log('locale', {
    cookie: getCookie("locale"),
    navigator: getLocaleFromNavigator(),
    fallback: INIT_OPTIONS.fallbackLocale,
    locale,
  });

  return locale;
}
