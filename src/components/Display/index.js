import { createEffect, createSignal } from "solid-js";
import calculator from "../../stores/calculator";

import "./index.css";

function Display() {
  const [isTransition, setIsTransition] = createSignal(false);

  createEffect(() => {
    if (calculator.isReadingValue === false) {
      setIsTransition(true);

      setTimeout(() => {
        setIsTransition(false);
      }, 100);
    }
  });

  const getDisplayContent = () => {
    if (calculator.displayContent.length) {
      return new Intl.NumberFormat().format(calculator.displayContent);
    }

    return calculator.displayContent;
  };

  return (
    <div class="Display">
      <p class="Display__content">
        {isTransition() ? null : getDisplayContent()}
      </p>
    </div>
  );
}

export default Display;
