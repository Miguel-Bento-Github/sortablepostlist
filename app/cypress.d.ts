import { mount } from "cypress/vue";

type VueWrapper = {
  component: Cypress.Cypress["vueWrapper"]["vm"];
  wrapper: Cypress.Cypress["vueWrapper"];
};

declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount;
      /**
       * Custom command to select DOM element by `data-cy` attribute.
       * @param value The `data-cy` value
       */
      dataCy(value: string): Chainable<JQuery<HTMLElement>>;
      /**
       * Custom command to access the Vue Test Utils wrapper in component testing.
       */
      vueWrapper(): Chainable<VueWrapper>;
    }
  }
}
