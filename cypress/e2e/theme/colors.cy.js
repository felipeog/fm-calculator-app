/// <reference types="cypress" />

const theme1 = {
  name: "theme_1",
  index: 0,
  appBackground: "#3a4764",
  appTextColor: "#ffffff",
  toggleBackground: "#232c43",
  toggleKey: "#d03f2f",
  displayBackground: "#182034",
  keyboardBackground: "#232c43",
  keyTextColor: "#444b5a",
  keyBackground: "#eae3dc",
  keyShadow: "#b4a597",
  actionKeyTextColor: "#ffffff",
  actionKeyBackground: "#637097",
  actionKeyShadow: "#404e72",
  equalsKeyTextColor: "#ffffff",
  equalsKeyBackground: "#d03f2f",
  equalsKeyShadow: "#93261a",
};
const theme2 = {
  name: "theme_2",
  index: 1,
  appBackground: "#e6e6e6",
  appTextColor: "#35352c",
  toggleBackground: "#d1cccc",
  toggleKey: "#ca5502",
  displayBackground: "#ededed",
  keyboardBackground: "#d1cccc",
  keyTextColor: "#35352c",
  keyBackground: "#e5e4e1",
  keyShadow: "#a69d91",
  actionKeyTextColor: "#ffffff",
  actionKeyBackground: "#377f86",
  actionKeyShadow: "#1b5f65",
  equalsKeyTextColor: "#ffffff",
  equalsKeyBackground: "#ca5502",
  equalsKeyShadow: "#893901",
};
const theme3 = {
  name: "theme_3",
  index: 2,
  appBackground: "#160628",
  appTextColor: "#ffe53d",
  toggleBackground: "#1d0934",
  toggleKey: "#00e0d1",
  displayBackground: "#1d0934",
  keyboardBackground: "#1d0934",
  keyTextColor: "#ffe53d",
  keyBackground: "#341c4f",
  keyShadow: "#871c9c",
  actionKeyTextColor: "#ffffff",
  actionKeyBackground: "#58077d",
  actionKeyShadow: "#bc15f4",
  equalsKeyTextColor: "#1b2428",
  equalsKeyBackground: "#00e0d1",
  equalsKeyShadow: "#6cf9f2",
};
const themes = [theme1, theme2, theme3];

describe("colors", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  themes.forEach((theme) => {
    it(`should render ${theme.name} colors`, () => {
      cy.get(".ThemeSelector__toggle input")
        .invoke("val", theme.index)
        .trigger("change");

      cy.get(".App")
        .should("have.css", "background-color")
        .and("be.colored", theme.appBackground);

      cy.get("body")
        .should("have.css", "color")
        .and("be.colored", theme.appTextColor);

      /* TODO: check how to do
      cy.get(".ThemeSelector__range::-webkit-slider-runnable-track")
        .should("have.css", "background")
        .and("be.colored", theme.toggleBackground);
      cy.get(".ThemeSelector__range::-webkit-slider-thumb")
        .should("have.css", "color")
        .and("be.colored", theme.toggleKey);
      */

      cy.get(".Display")
        .should("have.css", "background-color")
        .and("be.colored", theme.displayBackground);

      cy.get(".Keyboard")
        .should("have.css", "background-color")
        .and("be.colored", theme.keyboardBackground);
      cy.get(".Keyboard__default-button")
        .should("have.css", "color")
        .and("be.colored", theme.keyTextColor);
      cy.get(".Keyboard__default-button")
        .should("have.css", "background-color")
        .and("be.colored", theme.keyBackground);
      cy.get(".Keyboard__default-button")
        .should("have.css", "border-color")
        .and("be.colored", theme.keyShadow);
      cy.get(".Keyboard__action-button")
        .should("have.css", "color")
        .and("be.colored", theme.actionKeyTextColor);
      cy.get(".Keyboard__action-button")
        .should("have.css", "background-color")
        .and("be.colored", theme.actionKeyBackground);
      cy.get(".Keyboard__action-button")
        .should("have.css", "border-color")
        .and("be.colored", theme.actionKeyShadow);
      cy.get(".Keyboard__equals-button")
        .should("have.css", "color")
        .and("be.colored", theme.equalsKeyTextColor);
      cy.get(".Keyboard__equals-button")
        .should("have.css", "background-color")
        .and("be.colored", theme.equalsKeyBackground);
      cy.get(".Keyboard__equals-button")
        .should("have.css", "border-color")
        .and("be.colored", theme.equalsKeyShadow);
    });
  });
});
