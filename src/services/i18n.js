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
  loadingDelay: 200,
  formats: {},
  warnOnMissingMessages: false,
};

export let currentLocale = null;

register("en", () => import("./messages/en.json"));
register("es", () => import("./messages/es-ES.json"));
register("val", () => import("./messages/cat-VAL.json"));
register("pl", () => import("./messages/pl.json"));

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
export function startClient() {
  const initialLocale =
    getCookie("locale") ||
    languageFromLocale(getLocaleFromNavigator() || INIT_OPTIONS.fallbackLocale);
  $locale.set(initialLocale);
  init({
    ...INIT_OPTIONS,
    initialLocale,
  });
  return initialLocale;
}

// init only for routes (urls with no extensions such as .js, .css, etc) and for service worker
const DOCUMENT_REGEX = /(^([^.?#@]+)?([?#](.+)?)?|service-worker.*?\.html)$/;
// initialize the i18n library in the server and returns its middleware
export function i18nMiddleware(request) {
  // initialLocale will be set by the middleware
  init(INIT_OPTIONS);

  const isDocument = DOCUMENT_REGEX.test(request.originalUrl);
  // get the initial locale only for a document request
  if (!isDocument) {
    next();
    return;
  }

  let locale = getCookie("locale", request.headers.cookie);

  // no cookie, let's get the first accepted language
  if (locale == null) {
    if (request.headers["accept-language"]) {
      const headerLang = request.headers["accept-language"]
        .split(",")[0]
        .trim();
      if (headerLang.length > 1) {
        locale = languageFromLocale(headerLang);
      }
    } else {
      locale = INIT_OPTIONS.initialLocale || INIT_OPTIONS.fallbackLocale;
    }
  }

  if (locale != null && locale !== currentLocale) {
    $locale.set(locale);
  }
}
