import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://ideal-engine.netlify.app/",
  integrations: [preact()]
});