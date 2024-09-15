import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

const config = defineConfig({
  integrations: [tailwind(), react()],
  devToolbar: { enabled: false },
});

export default defineConfig(config);
