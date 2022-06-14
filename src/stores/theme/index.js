import { createEffect } from "solid-js";
import { createStore } from "solid-js/store";

import { themes, defaultTheme } from "../../consts/themes";

const themeLsKey = "calculator-app/theme";

const [theme, setTheme] = createStore({
  name: localStorage.getItem(themeLsKey) ?? defaultTheme,
});

createEffect(() => {
  localStorage.setItem(themeLsKey, theme.name);
  document.querySelector("html").setAttribute("data-theme", theme.name);
});

function getCurrentThemeIndex() {
  return themes.indexOf(theme.name);
}

function setThemeByIndex(index) {
  setTheme(() => {
    return {
      name: themes[index],
    };
  });
}

export { theme, getCurrentThemeIndex, setThemeByIndex };
