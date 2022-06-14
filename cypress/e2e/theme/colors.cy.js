/// <reference types="cypress" />

const theme1 = {
  name: "theme_1",
  rangeValue: 0,
  variables: [
    {
      name: "--app_background",
      value: "#3a4764",
    },
    {
      name: "--app_text_color",
      value: "#ffffff",
    },
    {
      name: "--toggle_background",
      value: "#232c43",
    },
    {
      name: "--toggle_key",
      value: "#d03f2f",
    },
    {
      name: "--display_background",
      value: "#182034",
    },
    {
      name: "--keyboard_background",
      value: "#232c43",
    },
    {
      name: "--key_text_color",
      value: "#444b5a",
    },
    {
      name: "--key_background",
      value: "#eae3dc",
    },
    {
      name: "--key_shadow",
      value: "#b4a597",
    },
    {
      name: "--action_key_text_color",
      value: "#ffffff",
    },
    {
      name: "--action_key_background",
      value: "#637097",
    },
    {
      name: "--action_key_shadow",
      value: "#404e72",
    },
    {
      name: "--equals_key_text_color",
      value: "#ffffff",
    },
    {
      name: "--equals_key_background",
      value: "#d03f2f",
    },
    {
      name: "--equals_key_shadow",
      value: "#93261a",
    },
  ],
};
const theme2 = {
  name: "theme_2",
  rangeValue: 1,
  variables: [
    {
      name: "--app_background",
      value: "#e6e6e6",
    },
    {
      name: "--app_text_color",
      value: "#35352c",
    },
    {
      name: "--toggle_background",
      value: "#d1cccc",
    },
    {
      name: "--toggle_key",
      value: "#ca5502",
    },
    {
      name: "--display_background",
      value: "#ededed",
    },
    {
      name: "--keyboard_background",
      value: "#d1cccc",
    },
    {
      name: "--key_text_color",
      value: "#35352c",
    },
    {
      name: "--key_background",
      value: "#e5e4e1",
    },
    {
      name: "--key_shadow",
      value: "#a69d91",
    },
    {
      name: "--action_key_text_color",
      value: "#ffffff",
    },
    {
      name: "--action_key_background",
      value: "#377f86",
    },
    {
      name: "--action_key_shadow",
      value: "#1b5f65",
    },
    {
      name: "--equals_key_text_color",
      value: "#ffffff",
    },
    {
      name: "--equals_key_background",
      value: "#ca5502",
    },
    {
      name: "--equals_key_shadow",
      value: "#893901",
    },
  ],
};
const theme3 = {
  name: "theme_3",
  rangeValue: 2,
  variables: [
    {
      name: "--app_background",
      value: "#160628",
    },
    {
      name: "--app_text_color",
      value: "#ffe53d",
    },
    {
      name: "--toggle_background",
      value: "#1d0934",
    },
    {
      name: "--toggle_key",
      value: "#00e0d1",
    },
    {
      name: "--display_background",
      value: "#1d0934",
    },
    {
      name: "--keyboard_background",
      value: "#1d0934",
    },
    {
      name: "--key_text_color",
      value: "#ffe53d",
    },
    {
      name: "--key_background",
      value: "#341c4f",
    },
    {
      name: "--key_shadow",
      value: "#871c9c",
    },
    {
      name: "--action_key_text_color",
      value: "#ffffff",
    },
    {
      name: "--action_key_background",
      value: "#58077d",
    },
    {
      name: "--action_key_shadow",
      value: "#bc15f4",
    },
    {
      name: "--equals_key_text_color",
      value: "#1b2428",
    },
    {
      name: "--equals_key_background",
      value: "#00e0d1",
    },
    {
      name: "--equals_key_shadow",
      value: "#6cf9f2",
    },
  ],
};
const themes = [theme1, theme2, theme3];

describe("colors", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  themes.forEach((theme) => {
    it(`should have ${theme.name} CSS variables`, () => {
      cy.get(".ThemeSelector__toggle input")
        .invoke("val", theme.rangeValue)
        .trigger("change");

      cy.get("html").then((jQueryElement) => {
        const html = jQueryElement.get(0);
        const htmlStyle = getComputedStyle(html);

        theme.variables.forEach((variable) => {
          const current = htmlStyle.getPropertyValue(variable.name);

          expect(current).contains(variable.value);
        });
      });
    });
  });
});
