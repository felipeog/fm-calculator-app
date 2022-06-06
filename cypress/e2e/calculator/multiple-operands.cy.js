/// <reference types="cypress" />

describe("operand/operation/operand/operation/equals", () => {
  before(() => {
    cy.visit("/");
  });

  beforeEach(() => {
    cy.pressButton("reset");
  });

  it("sums", () => {
    cy.pressButton("1");
    cy.checkDisplay("1");

    cy.pressButton("+");
    cy.checkDisplay("1");

    cy.pressButton("2");
    cy.checkDisplay("2");

    cy.pressButton("+");
    cy.checkDisplay("3");

    cy.pressButton("3");
    cy.checkDisplay("3");

    cy.pressButton("=");
    cy.checkDisplay("6");
  });

  it("subtracts", () => {
    cy.pressButton("1");
    cy.checkDisplay("1");

    cy.pressButton("-");
    cy.checkDisplay("1");

    cy.pressButton("2");
    cy.checkDisplay("2");

    cy.pressButton("-");
    cy.checkDisplay("-1");

    cy.pressButton("3");
    cy.checkDisplay("3");

    cy.pressButton("=");
    cy.checkDisplay("-4");
  });

  it("multiplies", () => {
    cy.pressButton("1");
    cy.checkDisplay("1");

    cy.pressButton("x");
    cy.checkDisplay("1");

    cy.pressButton("2");
    cy.checkDisplay("2");

    cy.pressButton("x");
    cy.checkDisplay("2");

    cy.pressButton("3");
    cy.checkDisplay("3");

    cy.pressButton("=");
    cy.checkDisplay("6");
  });

  it("divides", () => {
    cy.pressButton("6");
    cy.checkDisplay("6");

    cy.pressButton("/");
    cy.checkDisplay("6");

    cy.pressButton("3");
    cy.checkDisplay("3");

    cy.pressButton("/");
    cy.checkDisplay("2");

    cy.pressButton("2");
    cy.checkDisplay("2");

    cy.pressButton("=");
    cy.checkDisplay("1");
  });
});

describe("operand/operation/operand/equals/operation/equals", () => {
  before(() => {
    cy.visit("/");
  });

  beforeEach(() => {
    cy.pressButton("reset");
  });

  it("sums", () => {
    cy.pressButton("1");
    cy.checkDisplay("1");

    cy.pressButton("+");
    cy.checkDisplay("1");

    cy.pressButton("2");
    cy.checkDisplay("2");

    cy.pressButton("=");
    cy.checkDisplay("3");

    cy.pressButton("+");
    cy.checkDisplay("3");

    cy.pressButton("3");
    cy.checkDisplay("3");

    cy.pressButton("=");
    cy.checkDisplay("6");
  });

  it("subtracts", () => {
    cy.pressButton("1");
    cy.checkDisplay("1");

    cy.pressButton("-");
    cy.checkDisplay("1");

    cy.pressButton("2");
    cy.checkDisplay("2");

    cy.pressButton("=");
    cy.checkDisplay("-1");

    cy.pressButton("-");
    cy.checkDisplay("-1");

    cy.pressButton("3");
    cy.checkDisplay("3");

    cy.pressButton("=");
    cy.checkDisplay("-4");
  });

  it("multiplies", () => {
    cy.pressButton("1");
    cy.checkDisplay("1");

    cy.pressButton("x");
    cy.checkDisplay("1");

    cy.pressButton("2");
    cy.checkDisplay("2");

    cy.pressButton("=");
    cy.checkDisplay("2");

    cy.pressButton("x");
    cy.checkDisplay("2");

    cy.pressButton("3");
    cy.checkDisplay("3");

    cy.pressButton("=");
    cy.checkDisplay("6");
  });

  it("divides", () => {
    cy.pressButton("6");
    cy.checkDisplay("6");

    cy.pressButton("/");
    cy.checkDisplay("6");

    cy.pressButton("3");
    cy.checkDisplay("3");

    cy.pressButton("=");
    cy.checkDisplay("2");

    cy.pressButton("/");
    cy.checkDisplay("2");

    cy.pressButton("2");
    cy.checkDisplay("2");

    cy.pressButton("=");
    cy.checkDisplay("1");
  });
});
