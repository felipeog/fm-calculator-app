/// <reference types="cypress" />

describe("reset", () => {
  before(() => {
    cy.visit("/");
  });

  it("resets the calculator", () => {
    cy.pressButton("0");
    cy.checkDisplay("0");

    cy.pressButton("1");
    cy.checkDisplay("1");

    cy.pressButton("2");
    cy.checkDisplay("12");

    cy.pressButton("3");
    cy.checkDisplay("123");

    cy.pressButton("4");
    cy.checkDisplay("1,234");

    cy.pressButton("5");
    cy.checkDisplay("12,345");

    cy.pressButton("6");
    cy.checkDisplay("123,456");

    cy.pressButton("7");
    cy.checkDisplay("1,234,567");

    cy.pressButton("8");
    cy.checkDisplay("12,345,678");

    cy.pressButton("9");
    cy.checkDisplay("123,456,789");

    cy.pressButton("reset");
    cy.checkDisplayEmpty();
  });
});
