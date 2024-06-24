import { fileURLToPath, URL } from 'node:url'
import { sentrySvelteKit } from "@sentry/sveltekit";
import { sveltekit } from "@sveltejs/kit/vite";
/** @type {import('vite').UserConfig} */
const config = {
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  plugins: [sentrySvelteKit({
    sourceMapsUploadOptions: {
      org: "gaia-charge",
      project: "website"
    }
  }), sveltekit()]
};
export default config;