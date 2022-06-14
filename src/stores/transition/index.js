import { createStore } from "solid-js/store";

const transitionButtons = ["-", "x", "/", "+", "="];

const [transition, setTransition] = createStore({
  display: {
    isTransitioning: false,
  },
  keyboard: {
    isTransitioning: false,
    button: "",
  },
});

function triggerDisplayTransition() {
  setTransition({
    display: {
      isTransitioning: true,
    },
  });

  setTimeout(() => {
    setTransition({
      display: {
        isTransitioning: false,
      },
    });
  }, 100);
}

function handleDisplayTransition(input) {
  if (transitionButtons.includes(input)) {
    triggerDisplayTransition();
  }
}

function triggerKeyboardTransition(button) {
  setTransition({
    keyboard: {
      isTransitioning: true,
      button,
    },
  });

  setTimeout(() => {
    setTransition({
      keyboard: {
        isTransitioning: false,
        button: "",
      },
    });
  }, 200);
}

function handleKeyboardTransition(input) {
  switch (input) {
    case "Delete":
    case "Backspace":
      triggerKeyboardTransition("del");
      break;

    case "r":
      triggerKeyboardTransition("reset");
      break;

    default:
      triggerKeyboardTransition(input);
      break;
  }
}

export {
  transition,
  triggerDisplayTransition,
  handleDisplayTransition,
  triggerKeyboardTransition,
  handleKeyboardTransition,
};
