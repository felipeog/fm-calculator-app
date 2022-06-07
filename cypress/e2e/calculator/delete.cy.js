/// <reference types="cypress" />

describe("delete", () => {
  before(() => {
    cy.visit("/");
  });

  it("deletes one character at a time", () => {
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

    cy.pressButton("del");
    cy.checkDisplay("12,345,678");

    cy.pressButton("del");
    cy.checkDisplay("1,234,567");

    cy.pressButton("del");
    cy.checkDisplay("123,456");

    cy.pressButton("del");
    cy.checkDisplay("12,345");

    cy.pressButton("del");
    cy.checkDisplay("1,234");

    cy.pressButton("del");
    cy.checkDisplay("123");

    cy.pressButton("del");
    cy.checkDisplay("12");

    cy.pressButton("del");
    cy.checkDisplay("1");

    cy.pressButton("del");
    cy.checkDisplay("");
  });
});
