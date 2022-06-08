/// <reference types="cypress" />

describe("errors", () => {
  before(() => {
    cy.visit("/");
  });

  beforeEach(() => {
    cy.pressButton("reset");
  });

  it("should alert error on division by zero", () => {
    const alertStub = cy.stub();

    cy.on("window:alert", alertStub);

    cy.pressButton("2");
    cy.checkDisplay("2");

    cy.pressButton("/");
    cy.checkDisplay("2");

    cy.pressButton("0");
    cy.checkDisplay("0");

    cy.pressButton("=").then(() => {
      expect(alertStub).to.be.calledWith("[Error]: Division by zero");
    });
  });

  it("should alert error on upper boundary", () => {
    const alertStub = cy.stub();

    cy.on("window:alert", alertStub);

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

    cy.pressButton("+");
    cy.checkDisplay("999,999,999");

    cy.pressButton("1");
    cy.checkDisplay("1");

    cy.pressButton("=").then(() => {
      expect(alertStub).to.be.calledWith("[Error]: Out of bounds");
    });
  });

  it("should alert error on lower boundary", () => {
    const alertStub = cy.stub();

    cy.on("window:alert", alertStub);

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

    cy.pressButton("-");
    cy.checkDisplay("-999,999,999");

    cy.pressButton("1");
    cy.checkDisplay("1");

    cy.pressButton("=").then(() => {
      expect(alertStub).to.be.calledWith("[Error]: Out of bounds");
    });
  });
});
