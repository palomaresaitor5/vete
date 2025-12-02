import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import netlify from "@astrojs/netlify";
import { fileURLToPath } from "url";

const srcDir = fileURLToPath(new URL("./src", import.meta.url));

export default defineConfig({
  srcDir,
  integrations: [react(), tailwind({ applyBaseStyles: false })],
  adapter: netlify(),
  vite: {
    resolve: {
      alias: {
        "@": srcDir,
      },
    },
  },
});
