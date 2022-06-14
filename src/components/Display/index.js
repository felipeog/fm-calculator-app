import { createEffect } from "solid-js";

import { calculator } from "../../stores/calculator";
import { transition, triggerDisplayTransition } from "../../stores/transition";
import "./index.css";

function Display() {
  function formatValue(value) {
    return new Intl.NumberFormat("en-US").format(value);
  }

  const getDisplayContent = () => {
    if (calculator.displayContent.includes("[Error]")) {
      return calculator.displayContent;
    }

    if (calculator.displayContent.length) {
      if (calculator.displayContent.includes(".")) {
        const [left, right] = calculator.displayContent.split(".");

        return `${formatValue(left)}.${right ?? ""}`;
      }

      return formatValue(calculator.displayContent);
    }

    return null;
  };

  createEffect((prev) => {
    if (calculator.isReadingValue !== prev) {
      triggerDisplayTransition();
    }

    return calculator.isReadingValue;
  });

  return (
    <section class="Display">
      <p class="Display__content">
        {transition.display.isTransitioning ? null : getDisplayContent()}
      </p>
    </section>
  );
}

export { Display };
