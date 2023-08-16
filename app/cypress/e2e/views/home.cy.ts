describe("Render", () => {
  beforeEach(() => {
    cy.viewport(1366, 768);
  });

  it("should show loader", () => {
    cy.intercept("GET", `/api/training-contents`, {
      fixture: `post.json`
    }).as("posts");
    cy.visit("/");
    cy.dataCy("loader").should("be.visible");
  });

  it("should render posts", () => {
    cy.intercept(
      "GET",
      "https://jsonplaceholder.typicode.com/posts/?_start=0&_limit=5",
      {
        fixture: `post.json`
      }
    ).as("posts");

    cy.visit("/").wait("@posts");
    cy.dataCy("posts").should("exist");
  });
});

describe("Sort", () => {
  beforeEach(() => {
    cy.viewport(1366, 768);
  });

  it("should swap Post 1 with Post 2", () => {
    cy.intercept(
      "GET",
      "https://jsonplaceholder.typicode.com/posts/?_start=0&_limit=5",
      {
        fixture: `post.json`
      }
    ).as("posts");

    const expectedOutcome = ["Post 2", "Post 1", "Post 3", "Post 4", "Post 5"];

    cy.visit("/").wait("@posts");
    cy.dataCy("control-down").first().click();
    cy.dataCy("posts")
      .dataCy("post-id")
      .should((cells) => {
        const list = Cypress._.map(cells, (cell) => cell.innerText);
        expect(list, "sorted list").to.deep.equal(expectedOutcome);
      });
  });

  it("should swap Post 2 with Post 1", () => {
    cy.intercept(
      "GET",
      "https://jsonplaceholder.typicode.com/posts/?_start=0&_limit=5",
      {
        fixture: `post.json`
      }
    ).as("posts");

    const expectedOutcome = ["Post 2", "Post 1", "Post 3", "Post 4", "Post 5"];

    cy.visit("/").wait("@posts");
    cy.dataCy("control-up").eq(0).click();
    cy.dataCy("posts")
      .dataCy("post-id")
      .should((cells) => {
        const list = Cypress._.map(cells, (cell) => cell.innerText);
        expect(list, "sorted list").to.deep.equal(expectedOutcome);
      });
  });

  it("should make Post 1 the last", () => {
    cy.intercept(
      "GET",
      "https://jsonplaceholder.typicode.com/posts/?_start=0&_limit=5",
      {
        fixture: `post.json`
      }
    ).as("posts");

    const expectedOutcome = ["Post 2", "Post 3", "Post 4", "Post 5", "Post 1"];

    cy.visit("/").wait("@posts");
    cy.dataCy("control-down").click({ multiple: true });
    cy.dataCy("posts")
      .dataCy("post-id")
      .should((cells) => {
        const list = Cypress._.map(cells, (cell) => cell.innerText);
        expect(list, "sorted list").to.deep.equal(expectedOutcome);
      });
  });
});
