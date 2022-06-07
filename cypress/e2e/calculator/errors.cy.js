/// <reference types="cypress" />

// TODO:
describe.skip("errors", () => {
  before(() => {
    cy.visit("/");
  });

  beforeEach(() => {
    cy.pressButton("reset");
  });

  it("errors", () => {
    // errors
  });
});
