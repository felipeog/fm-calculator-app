/// <reference types="cypress" />

describe("decimals", () => {
  before(() => {
    cy.visit("/");
  });

  beforeEach(() => {
    cy.pressButton("reset");
  });

  it('should render "0." on "." input', () => {
    cy.pressButton(".");
    cy.checkDisplay("0.");
  });

  it("should not render more than one leading zero on decimals", () => {
    cy.pressButton("0");
    cy.checkDisplay("0");

    cy.pressButton("0");
    cy.checkDisplay("0");

    cy.pressButton(".");
    cy.checkDisplay("0.");

    cy.pressButton("1");
    cy.checkDisplay("0.1");
  });

  it('should render leading zero on decimals, input starting with "0"', () => {
    cy.pressButton("0");
    cy.checkDisplay("0");

    cy.pressButton(".");
    cy.checkDisplay("0.");

    cy.pressButton("6");
    cy.checkDisplay("0.6");
  });

  it('should render leading zero on decimals, input starting with "."', () => {
    cy.pressButton(".");
    cy.checkDisplay("0.");

    cy.pressButton("6");
    cy.checkDisplay("0.6");
  });

  it('should render leading zero on decimals as second operand, input starting with "0"', () => {
    cy.pressButton("6");
    cy.checkDisplay("6");

    cy.pressButton("x");
    cy.checkDisplay("6");

    cy.pressButton("0");
    cy.checkDisplay("0");

    cy.pressButton(".");
    cy.checkDisplay("0.");

    cy.pressButton("6");
    cy.checkDisplay("0.6");
  });

  it('should render leading zero on decimals as second operand, input starting with "."', () => {
    cy.pressButton("6");
    cy.checkDisplay("6");

    cy.pressButton("x");
    cy.checkDisplay("6");

    cy.pressButton(".");
    cy.checkDisplay("0.");

    cy.pressButton("6");
    cy.checkDisplay("0.6");
  });

  it("should not surpass decimal precision", () => {
    cy.pressButton(".");
    cy.checkDisplay("0.");

    cy.pressButton("1");
    cy.checkDisplay("0.1");

    cy.pressButton("2");
    cy.checkDisplay("0.12");

    cy.pressButton("3");
    cy.checkDisplay("0.123");

    cy.pressButton("4");
    cy.checkDisplay("0.1234");

    cy.pressButton("5");
    cy.checkDisplay("0.1234");

    cy.pressButton("6");
    cy.checkDisplay("0.1234");
  });
});
