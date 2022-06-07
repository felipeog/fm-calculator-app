/// <reference types="cypress" />

describe("reset", () => {
  before(() => {
    cy.visit("/");
  });

  it("resets the calculator", () => {
    cy.pressButton("0");
    cy.pressButton("1");
    cy.pressButton("2");
    cy.pressButton("3");
    cy.pressButton("4");
    cy.pressButton("5");
    cy.pressButton("6");
    cy.pressButton("7");
    cy.pressButton("8");
    cy.pressButton("9");
    cy.checkDisplay("123,456,789");

    cy.pressButton("reset");
    cy.checkDisplay("");
  });
});
