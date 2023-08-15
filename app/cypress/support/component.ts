// https://on.cypress.io/configuration

import "./commands";

import { mount } from "cypress/vue";
import type { VueWrapper } from "../../cypress";

// Import style sheets
import "@/styles/boot.scss";

// Custom mount command that exposes the Vue Test Utils wrapper
// https://docs.cypress.io/guides/component-testing/custom-mount-vue
Cypress.Commands.add("mount", (...args) => {
  return mount(...args).as("vue");
});

// Custom command that accesses the Vue Test Utils wrapper
Cypress.Commands.add("vueWrapper", () => {
  return cy.get<VueWrapper>("@vue");
});
