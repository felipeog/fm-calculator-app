import { render, fireEvent } from "solid-testing-library";

import { Button } from "./";
import transitionStore from "../../stores/transition";

jest.mock("../../stores/transition", () => {
  return { ...jest.requireActual("../../stores/transition") };
});

describe("Button", () => {
  beforeEach(() => {
    transitionStore.transition = {
      ...transitionStore.transition,
      keyboard: {
        isTransitioning: false,
        button: "",
      },
    };
  });

  it("renders correct value", () => {
    const props = {
      value: "Button value",
    };
    const { getByText, unmount } = render(() => <Button {...props} />);

    expect(getByText(props.value)).toBeInTheDocument();
    unmount();
  });

  it("appends className", () => {
    const props = {
      value: "Button value",
      className: "button-class",
    };
    const { getByText, unmount } = render(() => <Button {...props} />);

    expect(getByText(props.value)).toHaveClass(props.className);
    unmount();
  });

  it("renders default state", () => {
    const props = {
      value: "Button value",
    };
    const { getByText, unmount } = render(() => <Button {...props} />);

    expect(getByText(props.value)).toHaveClass("Button");
    expect(getByText(props.value)).not.toHaveClass("Button--active");
    unmount();
  });

  it("renders active state", () => {
    transitionStore.transition = {
      ...transitionStore.transition,
      keyboard: {
        isTransitioning: true,
        button: "0",
      },
    };

    const props = {
      value: "0",
    };
    const { getByText, unmount } = render(() => <Button {...props} />);

    expect(getByText(props.value)).toHaveClass("Button--active");
    unmount();
  });

  it("triggers handler", () => {
    const props = {
      value: "Button value",
      handler: jest.fn(),
    };
    const { getByText, unmount } = render(() => <Button {...props} />);
    const button = getByText(props.value);

    fireEvent.click(button);
    expect(props.handler).toBeCalledWith(props.value, expect.anything());
    unmount();
  });
});
