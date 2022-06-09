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

  it("should repeat last operation with last operand, operand/operation as input", () => {
    cy.pressButton("1");
    cy.checkDisplay("1");

    cy.pressButton("+");
    cy.checkDisplay("1");

    cy.pressButton("=");
    cy.checkDisplay("2");

    cy.pressButton("=");
    cy.checkDisplay("3");

    cy.pressButton("=");
    cy.checkDisplay("4");
  });

  it("should repeat last operation with last operand, operation/operand as input", () => {
    cy.pressButton("+");
    cy.checkDisplay("");

    cy.pressButton("1");
    cy.checkDisplay("1");

    cy.pressButton("=");
    cy.checkDisplay("1");

    cy.pressButton("=");
    cy.checkDisplay("2");

    cy.pressButton("=");
    cy.checkDisplay("3");
  });

  it("should repeat last operation with last operand, operand/operation/operand as input", () => {
    cy.pressButton("1");
    cy.checkDisplay("1");

    cy.pressButton("+");
    cy.checkDisplay("1");

    cy.pressButton("1");
    cy.checkDisplay("1");

    cy.pressButton("=");
    cy.checkDisplay("2");

    cy.pressButton("=");
    cy.checkDisplay("3");

    cy.pressButton("=");
    cy.checkDisplay("4");
  });

  it("should repeat last operation with last operand, operand/operation/operand/operation as input", () => {
    cy.pressButton("1");
    cy.checkDisplay("1");

    cy.pressButton("+");
    cy.checkDisplay("1");

    cy.pressButton("2");
    cy.checkDisplay("2");

    cy.pressButton("+");
    cy.checkDisplay("3");

    cy.pressButton("=");
    cy.checkDisplay("6");
  });
});
