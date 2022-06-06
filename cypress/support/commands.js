// https://on.cypress.io/custom-commands

Cypress.Commands.add("pressButton", (button) => {
  cy.get("button").contains(button).click();
});

Cypress.Commands.add("checkDisplay", (value) => {
  cy.get(".Display").should("have.text", value);
});
