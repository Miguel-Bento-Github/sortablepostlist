describe("notFound", () => {
  beforeEach(() => {
    cy.viewport(1366, 768);
  });

  it("Navigates to Not Found", () => {
    cy.visit("/posts");
    cy.contains("h1", "404: Lost in Cyberspace");
  });

  it("Navigates to Not Found and back Home", () => {
    cy.visit("/posts");
    cy.contains("h1", "404: Lost in Cyberspace").dataCy("rescue").click();
    cy.url().should("eq", "http://localhost:5050/");
  });
});
