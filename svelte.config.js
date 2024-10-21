/** @type {import('@sveltejs/kit').Config} */

import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
const config = {
  kit: {
    adapter: adapter()
  },
  preprocess: vitePreprocess(),
  compilerOptions: {
    customElement: true,
  }
};
export default config;
