import { createEffect } from "solid-js";
import { createStore } from "solid-js/store";

import calculator from "../stores/calculator";

const transitionButtons = ["-", "*", "/", "+", "=", "del", "reset"];

const [transition, setTransition] = createStore({
  isTransitioning: false,
});

createEffect((prev) => {
  if (calculator.isReadingValue !== prev) {
    triggerDisplayTransition();
  }

  return calculator.isReadingValue;
});

export function triggerDisplayTransition() {
  setTransition({
    isTransitioning: true,
  });

  setTimeout(() => {
    setTransition({
      isTransitioning: false,
    });
  }, 100);
}

export function handleDisplayTransition(input) {
  if (transitionButtons.includes(input)) {
    triggerDisplayTransition();
  }
}

export default transition;
