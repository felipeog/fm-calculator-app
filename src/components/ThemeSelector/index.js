import themes from "../../consts/themes";
import { getCurrentThemeIndex, setThemeByIndex } from "../../stores/theme";

import "./index.css";

function ThemeSelector() {
  function handleRangeChange(event) {
    setThemeByIndex(event.target.value);
  }

  return (
    <div class="ThemeSelector">
      <label class="ThemeSelector__label" for="theme">
        theme
      </label>

      <div class="ThemeSelector__toggle">
        <div class="ThemeSelector__toggle-labels">
          <label class="ThemeSelector__toggle-label" for="theme">
            1
          </label>
          <label class="ThemeSelector__toggle-label" for="theme">
            2
          </label>
          <label class="ThemeSelector__toggle-label" for="theme">
            3
          </label>
        </div>

        <input
          class="ThemeSelector__range"
          type="range"
          id="theme"
          name="theme"
          min="0"
          max={themes.length - 1}
          value={getCurrentThemeIndex()}
          onChange={handleRangeChange}
        />
      </div>
    </div>
  );
}

export default ThemeSelector;
