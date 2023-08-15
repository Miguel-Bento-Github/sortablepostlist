describe("home", () => {
  beforeEach(() => {
    cy.viewport(360, 640);
  });

  it("should partially render the UI if one request fails", () => {
    cy.intercept("GET", "/posts", {
      statusCode: 404
    }).as("posts");

    cy.visit("/").wait("@posts");

    cy.dataCy("posts").should("exist");
  });
});
