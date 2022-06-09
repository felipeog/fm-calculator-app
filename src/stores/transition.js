import { createEffect } from "solid-js";
import { createStore } from "solid-js/store";

import { calculator } from "../stores/calculator";

const transitionButtons = ["-", "x", "/", "+", "="];

const [transition, setTransition] = createStore({
  isTransitioning: false,
});

createEffect((prev) => {
  if (calculator.isReadingValue !== prev) {
    triggerDisplayTransition();
  }

  return calculator.isReadingValue;
});

function triggerDisplayTransition() {
  setTransition({
    isTransitioning: true,
  });

  setTimeout(() => {
    setTransition({
      isTransitioning: false,
    });
  }, 100);
}

function handleDisplayTransition(input) {
  if (transitionButtons.includes(input)) {
    triggerDisplayTransition();
  }
}

export { transition, triggerDisplayTransition, handleDisplayTransition };
