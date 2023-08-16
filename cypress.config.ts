import { defineConfig } from "cypress";

export default defineConfig({
  video: false,
  screenshotOnRunFailure: false,
  e2e: {
    baseUrl: "http://localhost:5050"
  },
  component: {
    devServer: {
      framework: "vue",
      bundler: "vite"
    },
    specPattern: "src/**/__tests__/*.cy.ts"
  },
  retries: 3
});
