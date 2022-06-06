/// <reference types="cypress" />

// TODO:
describe.skip("zero", () => {
  before(() => {
    cy.visit("/");
  });

  beforeEach(() => {
    cy.pressButton("reset");
  });

  it("zero", () => {
    // zero
  });
});
