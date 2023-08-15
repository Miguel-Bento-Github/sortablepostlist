describe("notFound", () => {
  beforeEach(() => {
    cy.viewport(360, 640);
  });

  it("Navigates to 404", () => {
    cy.visit("/posts");
    cy.contains("h1", "404: Lost in Cyberspace.");
  });
});
