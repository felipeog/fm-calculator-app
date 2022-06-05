import calculator from "../../stores/calculator";
import transition from "../../stores/transition";

import "./index.css";

function Display() {
  function formatValue(value) {
    return new Intl.NumberFormat("en-US").format(value);
  }

  const getDisplayContent = () => {
    if (calculator.displayContent.length) {
      if (calculator.displayContent.includes(".")) {
        const [left, right] = calculator.displayContent.split(".");

        return `${formatValue(left)}.${right ?? ""}`;
      }

      return formatValue(calculator.displayContent);
    }

    return null;
  };

  return (
    <div class="Display">
      <p class="Display__content">
        {transition.isTransitioning ? null : getDisplayContent()}
      </p>
    </div>
  );
}

export default Display;
