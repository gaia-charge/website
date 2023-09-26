import { sentrySvelteKit } from "@sentry/sveltekit";
import { sveltekit } from "@sveltejs/kit/vite";
/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sentrySvelteKit({
    sourceMapsUploadOptions: {
      org: "gaia-green-tech",
      project: "website"
    }
  }), sveltekit()]
};
export default config;