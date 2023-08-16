/// <reference types="vitest" />
import { defineConfig } from "vite";
import VueI18nPlugin from "@intlify/unplugin-vue-i18n/vite";
import vue from "@vitejs/plugin-vue";
import { dirname, resolve } from "node:path";
import { fileURLToPath, URL } from "node:url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VueI18nPlugin({
      include: resolve(
        dirname(fileURLToPath(import.meta.url)),
        "./src/locales/**"
      ),
      runtimeOnly: false,
      strictMessage: false, // Allows HTML, might cause XSS
      escapeHtml: false
    })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    }
  },
  server: { port: 8080 },
  test: {
    globals: true,
    environment: "happy-dom",
    include: ["**/__tests__/*.test.ts"]
  },
  build: {
    target: "esnext"
  }
});
