import { render } from "solid-testing-library";

import { Display } from "./";
import calculatorStore from "../../stores/calculator";
import transitionStore from "../../stores/transition";

jest.mock("../../stores/calculator", () => {
  return { ...jest.requireActual("../../stores/calculator") };
});
jest.mock("../../stores/transition", () => {
  return { ...jest.requireActual("../../stores/transition") };
});

describe("Display", () => {
  beforeEach(() => {
    calculatorStore.calculator = {
      ...calculatorStore.calculator,
      displayContent: "",
    };
    transitionStore.transition = {
      ...transitionStore.transition,
      display: {
        isTransitioning: false,
      },
    };
  });

  it("does not render when there is no content", () => {
    const { container, unmount } = render(() => <Display />);

    expect(container.textContent).toBe("");
    unmount();
  });

  it("does not render when transitioning", () => {
    calculatorStore.calculator = {
      ...calculatorStore.calculator,
      displayContent: "2",
    };
    transitionStore.transition = {
      ...transitionStore.transition,
      display: {
        isTransitioning: true,
      },
    };

    const { queryByText, unmount } = render(() => <Display />);

    expect(queryByText("2")).not.toBeInTheDocument();
    unmount();
  });

  it("renders long integer", () => {
    calculatorStore.calculator = {
      ...calculatorStore.calculator,
      displayContent: "999999999",
    };

    const { getByText, unmount } = render(() => <Display />);

    expect(getByText("999,999,999")).toBeInTheDocument();
    unmount();
  });

  it("renders long decimal", () => {
    calculatorStore.calculator = {
      ...calculatorStore.calculator,
      displayContent: "999999999.9999",
    };

    const { getByText, unmount } = render(() => <Display />);

    expect(getByText("999,999,999.9999")).toBeInTheDocument();
    unmount();
  });
});
