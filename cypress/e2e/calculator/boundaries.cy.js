/// <reference types="cypress" />

describe("boundaries", () => {
  before(() => {
    cy.visit("/");
  });

  beforeEach(() => {
    cy.pressButton("reset");
  });

  it("should not surpass upper boundary", () => {
    cy.pressButton("9");
    cy.pressButton("9");
    cy.pressButton("9");
    cy.checkDisplay("999");

    cy.pressButton("9");
    cy.pressButton("9");
    cy.pressButton("9");
    cy.checkDisplay("999,999");

    cy.pressButton("9");
    cy.pressButton("9");
    cy.pressButton("9");
    cy.checkDisplay("999,999,999");

    cy.pressButton("1");
    cy.checkDisplay("999,999,999");

    cy.pressButton("1");
    cy.checkDisplay("999,999,999");
  });

  it("should not surpass lower boundary", () => {
    cy.pressButton("-");
    cy.pressButton("9");
    cy.pressButton("9");
    cy.pressButton("9");
    cy.checkDisplay("999");

    cy.pressButton("9");
    cy.pressButton("9");
    cy.pressButton("9");
    cy.checkDisplay("999,999");

    cy.pressButton("9");
    cy.pressButton("9");
    cy.pressButton("9");
    cy.checkDisplay("999,999,999");

    cy.pressButton("1");
    cy.checkDisplay("999,999,999");

    cy.pressButton("1");
    cy.checkDisplay("999,999,999");
  });
});
