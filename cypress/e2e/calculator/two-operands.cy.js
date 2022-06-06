/// <reference types="cypress" />

describe("positive/operation/positive/equals", () => {
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
  });

  it("subtracts", () => {
    cy.pressButton("2");
    cy.checkDisplay("2");

    cy.pressButton("-");
    cy.checkDisplay("2");

    cy.pressButton("1");
    cy.checkDisplay("1");

    cy.pressButton("=");
    cy.checkDisplay("1");
  });

  it("multiplies", () => {
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

    cy.pressButton("2");
    cy.checkDisplay("2");

    cy.pressButton("=");
    cy.checkDisplay("3");
  });
});

// the calculator does not accept negative values as the second operand
// it will "forget" the previous operation, and do a subtraction
describe("negative/operation/negative/equals", () => {
  before(() => {
    cy.visit("/");
  });

  beforeEach(() => {
    cy.pressButton("reset");
  });

  it("sums", () => {
    cy.pressButton("-");
    cy.pressButton("1");
    cy.checkDisplay("1");

    cy.pressButton("+");
    cy.checkDisplay("-1");

    cy.pressButton("-");
    cy.pressButton("1");
    cy.checkDisplay("1");

    cy.pressButton("=");
    cy.checkDisplay("-2");
  });

  it("subtracts", () => {
    cy.pressButton("-");
    cy.pressButton("2");
    cy.checkDisplay("2");

    cy.pressButton("-");
    cy.checkDisplay("-2");

    cy.pressButton("-");
    cy.pressButton("2");
    cy.checkDisplay("2");

    cy.pressButton("=");
    cy.checkDisplay("-4");
  });

  it("multiplies", () => {
    cy.pressButton("-");
    cy.pressButton("2");
    cy.checkDisplay("2");

    cy.pressButton("x");
    cy.checkDisplay("-2");

    cy.pressButton("-");
    cy.pressButton("3");
    cy.checkDisplay("3");

    cy.pressButton("=");
    cy.checkDisplay("-5");
  });

  it("divides", () => {
    cy.pressButton("-");
    cy.pressButton("6");
    cy.checkDisplay("6");

    cy.pressButton("/");
    cy.checkDisplay("-6");

    cy.pressButton("-");
    cy.pressButton("2");
    cy.checkDisplay("2");

    cy.pressButton("=");
    cy.checkDisplay("-8");
  });
});

// the calculator does not accept negative values as the second operand
// it will "forget" the previous operation, and do a subtraction
describe("positive/operation/negative/equals", () => {
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

    cy.pressButton("-");
    cy.pressButton("1");
    cy.checkDisplay("1");

    cy.pressButton("=");
    cy.checkDisplay("0");
  });

  it("subtracts", () => {
    cy.pressButton("2");
    cy.checkDisplay("2");

    cy.pressButton("-");
    cy.checkDisplay("2");

    cy.pressButton("-");
    cy.pressButton("2");
    cy.checkDisplay("2");

    cy.pressButton("=");
    cy.checkDisplay("0");
  });

  it("multiplies", () => {
    cy.pressButton("2");
    cy.checkDisplay("2");

    cy.pressButton("x");
    cy.checkDisplay("2");

    cy.pressButton("-");
    cy.pressButton("3");
    cy.checkDisplay("3");

    cy.pressButton("=");
    cy.checkDisplay("-1");
  });

  it("divides", () => {
    cy.pressButton("6");
    cy.checkDisplay("6");

    cy.pressButton("/");
    cy.checkDisplay("6");

    cy.pressButton("-");
    cy.pressButton("2");
    cy.checkDisplay("2");

    cy.pressButton("=");
    cy.checkDisplay("4");
  });
});

describe("negative/operation/positive/equals", () => {
  before(() => {
    cy.visit("/");
  });

  beforeEach(() => {
    cy.pressButton("reset");
  });

  it("sums", () => {
    cy.pressButton("-");
    cy.pressButton("1");
    cy.checkDisplay("1");

    cy.pressButton("+");
    cy.checkDisplay("-1");

    cy.pressButton("1");
    cy.checkDisplay("1");

    cy.pressButton("=");
    cy.checkDisplay("0");
  });

  it("subtracts", () => {
    cy.pressButton("-");
    cy.pressButton("2");
    cy.checkDisplay("2");

    cy.pressButton("-");
    cy.checkDisplay("-2");

    cy.pressButton("2");
    cy.checkDisplay("2");

    cy.pressButton("=");
    cy.checkDisplay("-4");
  });

  it("multiplies", () => {
    cy.pressButton("-");
    cy.pressButton("2");
    cy.checkDisplay("2");

    cy.pressButton("x");
    cy.checkDisplay("-2");

    cy.pressButton("3");
    cy.checkDisplay("3");

    cy.pressButton("=");
    cy.checkDisplay("-6");
  });

  it("divides", () => {
    cy.pressButton("-");
    cy.pressButton("6");
    cy.checkDisplay("6");

    cy.pressButton("/");
    cy.checkDisplay("-6");

    cy.pressButton("2");
    cy.checkDisplay("2");

    cy.pressButton("=");
    cy.checkDisplay("-3");
  });
});
