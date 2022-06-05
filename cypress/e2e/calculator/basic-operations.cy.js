/// <reference types="cypress" />

describe("Basic operations", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("sums", () => {
    cy.get("button").contains("1").click();
    cy.get(".Display").should("have.text", "1");

    cy.get("button").contains("+").click();
    cy.get(".Display").should("have.text", "1");

    cy.get("button").contains("2").click();
    cy.get(".Display").should("have.text", "2");

    cy.get("button").contains("=").click();
    cy.get(".Display").should("have.text", "3");
  });

  it("subtracts", () => {
    cy.get("button").contains("2").click();
    cy.get(".Display").should("have.text", "2");

    cy.get("button").contains("-").click();
    cy.get(".Display").should("have.text", "2");

    cy.get("button").contains("1").click();
    cy.get(".Display").should("have.text", "1");

    cy.get("button").contains("=").click();
    cy.get(".Display").should("have.text", "1");
  });

  it("multiplies", () => {
    cy.get("button").contains("2").click();
    cy.get(".Display").should("have.text", "2");

    cy.get("button").contains("x").click();
    cy.get(".Display").should("have.text", "2");

    cy.get("button").contains("3").click();
    cy.get(".Display").should("have.text", "3");

    cy.get("button").contains("=").click();
    cy.get(".Display").should("have.text", "6");
  });

  it("divides", () => {
    cy.get("button").contains("6").click();
    cy.get(".Display").should("have.text", "6");

    cy.get("button").contains("/").click();
    cy.get(".Display").should("have.text", "6");

    cy.get("button").contains("2").click();
    cy.get(".Display").should("have.text", "2");

    cy.get("button").contains("=").click();
    cy.get(".Display").should("have.text", "3");
  });
});
