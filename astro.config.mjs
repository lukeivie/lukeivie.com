import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

const config = defineConfig({
  integrations: [react()],
  devToolbar: { enabled: false },
  vite: {
    plugins: [tailwindcss()],
  },
});

export default defineConfig(config);
