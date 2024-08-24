import { sveltekit } from "@sveltejs/kit/vite"; // Import sveltekit for Vite
import adapter from "@sveltejs/adapter-auto";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
  },
  plugins: [sveltekit()],
};

export default config;
