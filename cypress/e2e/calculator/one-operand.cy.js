/// <reference types="cypress" />

describe("operand/operation/equals -> operand/operation/operand/equals", () => {
  before(() => {
    cy.visit("/");
  });

  beforeEach(() => {
    cy.pressButton("reset");
  });

  it("sums", () => {
    cy.pressButton("2");
    cy.checkDisplay("2");

    cy.pressButton("+");
    cy.checkDisplay("2");

    cy.pressButton("=");
    cy.checkDisplay("4");

    cy.pressButton("=");
    cy.checkDisplay("6");
  });

  it("subtracts", () => {
    cy.pressButton("2");
    cy.checkDisplay("2");

    cy.pressButton("-");
    cy.checkDisplay("2");

    cy.pressButton("=");
    cy.checkDisplay("0");

    cy.pressButton("=");
    cy.checkDisplay("-2");
  });

  it("multiplies", () => {
    cy.pressButton("2");
    cy.checkDisplay("2");

    cy.pressButton("x");
    cy.checkDisplay("2");

    cy.pressButton("=");
    cy.checkDisplay("4");

    cy.pressButton("=");
    cy.checkDisplay("8");
  });

  it("divides", () => {
    cy.pressButton("2");
    cy.checkDisplay("2");

    cy.pressButton("/");
    cy.checkDisplay("2");

    cy.pressButton("=");
    cy.checkDisplay("1");

    cy.pressButton("=");
    cy.checkDisplay("0.5");
  });
});

describe("operation/operand/equals -> zero/operation/operand/equals", () => {
  before(() => {
    cy.visit("/");
  });

  beforeEach(() => {
    cy.pressButton("reset");
  });

  it("sums", () => {
    cy.pressButton("+");
    cy.checkDisplayEmpty();

    cy.pressButton("2");
    cy.checkDisplay("2");

    cy.pressButton("=");
    cy.checkDisplay("2");

    cy.pressButton("=");
    cy.checkDisplay("4");
  });

  it("subtracts", () => {
    cy.pressButton("-");
    cy.checkDisplayEmpty();

    cy.pressButton("2");
    cy.checkDisplay("2");

    cy.pressButton("=");
    cy.checkDisplay("-2");

    cy.pressButton("=");
    cy.checkDisplay("-4");
  });

  it("multiplies", () => {
    cy.pressButton("x");
    cy.checkDisplayEmpty();

    cy.pressButton("2");
    cy.checkDisplay("2");

    cy.pressButton("=");
    cy.checkDisplay("0");

    cy.pressButton("=");
    cy.checkDisplay("0");
  });

  it("divides", () => {
    cy.pressButton("/");
    cy.checkDisplayEmpty();

    cy.pressButton("2");
    cy.checkDisplay("2");

    cy.pressButton("=");
    cy.checkDisplay("0");

    cy.pressButton("=");
    cy.checkDisplay("0");
  });
});
