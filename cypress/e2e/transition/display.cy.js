/// <reference types="cypress" />

describe("display", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should transition from operand to operation", () => {
    cy.clock();

    cy.pressButton("6");
    cy.tick(110);
    cy.checkDisplay("6");

    cy.pressButton("+");
    cy.tick(60);
    cy.checkDisplay("");
    cy.tick(60);
    cy.checkDisplay("6");
  });

  it("should transition from operation to operand", () => {
    cy.clock();

    cy.pressButton("6");
    cy.tick(110);
    cy.checkDisplay("6");

    cy.pressButton("+");
    cy.tick(110);
    cy.checkDisplay("6");

    cy.pressButton("1");
    cy.tick(60);
    cy.checkDisplay("");
    cy.tick(60);
    cy.checkDisplay("1");
  });

  it("should transition by pressing equals", () => {
    cy.clock();

    cy.pressButton("1");
    cy.tick(110);
    cy.checkDisplay("1");

    cy.pressButton("=");
    cy.tick(60);
    cy.checkDisplay("");
    cy.tick(60);
    cy.checkDisplay("1");
  });
});
