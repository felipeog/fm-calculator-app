// https://on.cypress.io/custom-commands

Cypress.Commands.add("pressButton", (button) => {
  cy.get("button").contains(button).click();
});

Cypress.Commands.add("checkDisplay", (value) => {
  cy.get(".Display").should("have.text", value);
});

Cypress.Commands.add("checkDisplayEmpty", () => {
  // waits for the 100ms display transition
  // to ensure the display is empty
  cy.wait(110);

  cy.get(".Display").should("have.text", "");
});
