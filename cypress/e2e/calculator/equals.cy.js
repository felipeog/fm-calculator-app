/// <reference types="cypress" />

describe("equals", () => {
  before(() => {
    cy.visit("/");
  });

  beforeEach(() => {
    cy.pressButton("reset");
  });

  it("should do nothing with empty input", () => {
    cy.pressButton("=");
    cy.checkDisplayEmpty();

    cy.pressButton("=");
    cy.checkDisplayEmpty();

    cy.pressButton("=");
    cy.checkDisplayEmpty();
  });

  it("should do nothing with only an operation as input", () => {
    cy.pressButton("+");
    cy.checkDisplayEmpty();

    cy.pressButton("=");
    cy.checkDisplayEmpty();

    cy.pressButton("=");
    cy.checkDisplayEmpty();
  });

  it("should do nothing with only an operand as input", () => {
    cy.pressButton("1");
    cy.checkDisplay("1");

    cy.pressButton("=");
    cy.checkDisplay("1");

    cy.pressButton("=");
    cy.checkDisplay("1");
  });
});
