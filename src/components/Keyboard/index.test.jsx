import { render, fireEvent } from "solid-testing-library";

import { Keyboard } from ".";
import calculatorStore from "../../stores/calculator";
import transitionStore from "../../stores/transition";

jest.mock("../../stores/calculator", () => {
  return { ...jest.requireActual("../../stores/calculator") };
});
jest.mock("../../stores/transition", () => {
  return { ...jest.requireActual("../../stores/transition") };
});

const buttonLabels = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "+",
  "-",
  "x",
  "/",
  ".",
  "=",
  "reset",
  "del",
];
const buttonKeys = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "+",
  "-",
  "x",
  "/",
  ".",
  "=",
  "r",
  "Backspace",
  "Delete",
];

describe("Keyboard", () => {
  beforeEach(() => {
    calculatorStore.handleKeyboardInput = () => {};
    transitionStore.handleDisplayTransition = () => {};
    transitionStore.handleKeyboardTransition = () => {};
  });

  it("renders all buttons", () => {
    const { getByText, unmount } = render(() => <Keyboard />);

    buttonLabels.forEach((button) => {
      expect(getByText(button)).toBeInTheDocument();
    });

    unmount();
  });

  it("triggers callbacks on click", () => {
    calculatorStore.handleKeyboardInput = jest.fn();
    transitionStore.handleDisplayTransition = jest.fn();

    const { getByText, unmount } = render(() => <Keyboard />);

    buttonLabels.forEach((buttonLabel) => {
      fireEvent.click(getByText(buttonLabel));

      expect(calculatorStore.handleKeyboardInput).toHaveBeenCalledWith(
        buttonLabel
      );
      expect(transitionStore.handleDisplayTransition).toHaveBeenCalledWith(
        buttonLabel
      );
    });

    unmount();
  });

  it("triggers callbacks on keydown", () => {
    calculatorStore.handleKeyboardInput = jest.fn();
    transitionStore.handleDisplayTransition = jest.fn();
    transitionStore.handleKeyboardTransition = jest.fn();

    const { unmount } = render(() => <Keyboard />);

    buttonKeys.forEach((buttonKey) => {
      fireEvent.keyDown(document, { key: buttonKey });

      expect(calculatorStore.handleKeyboardInput).toHaveBeenCalledWith(
        buttonKey
      );
      expect(transitionStore.handleDisplayTransition).toHaveBeenCalledWith(
        buttonKey
      );
      expect(transitionStore.handleKeyboardTransition).toHaveBeenCalledWith(
        buttonKey
      );
    });

    unmount();
  });
});
