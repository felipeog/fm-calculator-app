/// <reference types="cypress" />

// TODO:
describe.skip("boundaries", () => {
  before(() => {
    cy.visit("/");
  });

  beforeEach(() => {
    cy.pressButton("reset");
  });

  it("boundaries", () => {
    // boundaries
  });
});
