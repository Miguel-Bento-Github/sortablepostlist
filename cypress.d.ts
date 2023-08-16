type VueWrapper = {
  component: Cypress.Cypress["vueWrapper"]["vm"];
  wrapper: Cypress.Cypress["vueWrapper"];
};

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Custom command to select DOM element by `data-cy` attribute.
       * @param value The `data-cy` value
       */
      dataCy(value: string): Chainable<JQuery<HTMLElement>>;
    }
  }
}
