import { render } from "solid-testing-library";

import { Header } from ".";

describe("Header", () => {
  it("renders app title", () => {
    const { getByText, unmount } = render(() => <Header />);

    expect(getByText("calc")).toBeInTheDocument();
    unmount();
  });
});
