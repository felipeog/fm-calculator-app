import { render, fireEvent } from "solid-testing-library";

import { ThemeSelector } from ".";
import themeStore from "../../stores/theme";

jest.mock("../../stores/theme", () => {
  return { ...jest.requireActual("../../stores/theme") };
});

describe("ThemeSelector", () => {
  beforeEach(() => {
    themeStore.getCurrentThemeIndex = () => {
      return 0;
    };
    themeStore.setThemeByIndex = () => {};
  });

  it("triggers callback on change", () => {
    themeStore.setThemeByIndex = jest.fn();

    const { getByRole, unmount } = render(() => <ThemeSelector />);

    fireEvent.change(getByRole("slider"), { target: { value: "0" } });

    expect(themeStore.setThemeByIndex).toHaveBeenCalledWith("0");
    unmount();
  });
});
