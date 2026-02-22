import { defineConfig } from "astro/config";
import uno from "@unocss/astro";
import path from "node:path";

export default defineConfig({
  integrations: [uno()],
  vite: {
    resolve: {
      alias: {
        "@": path.resolve("./src"),
      },
    },
  },
});
