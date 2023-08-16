describe("Time Travel", () => {
  beforeEach(() => {
    cy.viewport(1366, 768);
  });

  it("should move Post 2 below Post 3, move Post 4 below Post 5, move Post 3 above Post 1, click Time Travel on the second action card", () => {
    cy.intercept(
      "GET",
      "https://jsonplaceholder.typicode.com/posts/?_start=0&_limit=5",
      {
        fixture: `post.json`
      }
    ).as("posts");

    const expectedOutcome = ["Post 1", "Post 3", "Post 2", "Post 4", "Post 5"];

    cy.visit("/").wait("@posts");
    cy.dataCy("control-down").eq(1).click();
    cy.dataCy("posts")
      .dataCy("post-id")
      .should((cells) => {
        const list = Cypress._.map(cells, (cell) => cell.innerText);
        expect(list, "sorted list").to.deep.equal(expectedOutcome);
      });

    cy.dataCy("control-down").eq(3).click();
    cy.dataCy("posts")
      .dataCy("post-id")
      .should((cells) => {
        const list = Cypress._.map(cells, (cell) => cell.innerText);
        expect(list, "sorted list").to.deep.equal([
          "Post 1",
          "Post 3",
          "Post 2",
          "Post 5",
          "Post 4"
        ]);
      });

    cy.dataCy("control-up").eq(0).click();
    cy.dataCy("posts")
      .dataCy("post-id")
      .should((cells) => {
        const list = Cypress._.map(cells, (cell) => cell.innerText);
        expect(list, "sorted list").to.deep.equal([
          "Post 3",
          "Post 1",
          "Post 2",
          "Post 5",
          "Post 4"
        ]);
      });

    cy.dataCy("time-travel").eq(1).click();
    cy.dataCy("posts")
      .dataCy("post-id")
      .should((cells) => {
        const list = Cypress._.map(cells, (cell) => cell.innerText);
        expect(list, "sorted list").to.deep.equal(expectedOutcome);
      });
  });
});
