import classNames from "classnames";

import "./index.css";

function ThemeSelector() {
  const activeTheme = "theme-1";

  return (
    <div class="ThemeSelector">
      <span class="ThemeSelector__label">theme</span>

      <div class="ThemeSelector__toggle">
        <div class="ThemeSelector__toggle-labels">
          <span class="ThemeSelector__toggle-label">1</span>
          <span class="ThemeSelector__toggle-label">2</span>
          <span class="ThemeSelector__toggle-label">3</span>
        </div>

        <div class={classNames("ThemeSelector__toggle-body", activeTheme)} />
      </div>
    </div>
  );
}

export default ThemeSelector;
