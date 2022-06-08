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

  it("should not surpass decimal precision", () => {
    cy.pressButton(".");
    cy.pressButton("1");
    cy.pressButton("2");
    cy.pressButton("3");
    cy.pressButton("4");
    cy.checkDisplay("0.1234");

    cy.pressButton("5");
    cy.checkDisplay("0.1234");

    cy.pressButton("6");
    cy.checkDisplay("0.1234");
  });
});
