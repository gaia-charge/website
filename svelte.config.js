/** @type {import('@sveltejs/kit').Config} */

import adapter from "@sveltejs/adapter-netlify";
import preprocess from "svelte-preprocess";
import makeAttractionsImporter from "attractions/importer.js";

const config = {
  preprocess: preprocess({
    scss: {
      importer: makeAttractionsImporter({
        themeFile: "static/attractions-theme.scss",
      }),
    },
  }),
  kit: {
    adapter: adapter(),
  },
};
export default config;
