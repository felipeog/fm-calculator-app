/// <reference types="cypress" />

// TODO:
describe.skip("reset", () => {
  before(() => {
    cy.visit("/");
  });

  beforeEach(() => {
    cy.pressButton("reset");
  });

  it("reset", () => {
    // reset
  });
});
