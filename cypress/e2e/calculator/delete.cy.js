/// <reference types="cypress" />

// TODO:
describe.skip("delete", () => {
  before(() => {
    cy.visit("/");
  });

  beforeEach(() => {
    cy.pressButton("reset");
  });

  it("delete", () => {
    // delete
  });
});
