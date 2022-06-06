/// <reference types="cypress" />

// TODO:
describe.skip("equals", () => {
  before(() => {
    cy.visit("/");
  });

  beforeEach(() => {
    cy.pressButton("reset");
  });

  it("equals", () => {
    // equals
  });
});
