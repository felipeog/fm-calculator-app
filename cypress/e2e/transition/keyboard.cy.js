/// <reference types="cypress" />

const buttons = [
  {
    key: "0",
    value: "0",
  },
  {
    key: "1",
    value: "1",
  },
  {
    key: "2",
    value: "2",
  },
  {
    key: "3",
    value: "3",
  },
  {
    key: "4",
    value: "4",
  },
  {
    key: "5",
    value: "5",
  },
  {
    key: "6",
    value: "6",
  },
  {
    key: "7",
    value: "7",
  },
  {
    key: "8",
    value: "8",
  },
  {
    key: "9",
    value: "9",
  },
  {
    key: "Backspace",
    value: "del",
  },
  {
    key: "Delete",
    value: "del",
  },
  {
    key: "+",
    value: "+",
  },
  {
    key: "-",
    value: "-",
  },
  {
    key: ".",
    value: ".",
  },
  {
    key: "/",
    value: "/",
  },
  {
    key: "x",
    value: "x",
  },
  {
    key: "r",
    value: "reset",
  },
  {
    key: "=",
    value: "=",
  },
];

describe("keyboard", () => {
  before(() => {
    cy.visit("/");
  });

  buttons.forEach((button) => {
    it(`should transition "${button.value}" button's active state, "${button.key}" as input`, () => {
      cy.clock();

      cy.get("body").trigger("keydown", { key: button.key });

      cy.tick(110);
      cy.get("button")
        .contains(button.value)
        .should("have.class", "Button--active");

      cy.tick(110);
      cy.get("button")
        .contains(button.value)
        .should("not.have.class", "Button--active");
    });
  });
});
