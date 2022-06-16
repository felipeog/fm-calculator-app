// import { render, fireEvent } from "solid-testing-library";
import { render } from "solid-testing-library";

import { Button } from "./";

describe("<Button />", () => {
  test("renders value", () => {
    const { getByText, unmount } = render(() => <Button value={"aoba"} />);

    expect(getByText("aoba")).toBeInTheDocument();
    unmount();
  });

  // test("it will add a new todo", async () => {
  //   const { getByPlaceholderText, getByText, unmount } = render(() => (
  //     <TodoList />
  //   ));
  //   const input = getByPlaceholderText("new todo here");
  //   const button = getByText("Add Todo");
  //   input.value = "test new todo";
  //   fireEvent.click(button);
  //   expect(input.value).toBe("");
  //   expect(getByText(/test new todo/)).toBeInTheDocument();
  //   unmount();
  // });

  // test("it will mark a todo as completed", async () => {
  //   const { getByPlaceholderText, findByRole, getByText, unmount } = render(
  //     () => <TodoList />
  //   );
  //   const input = getByPlaceholderText("new todo here");
  //   const button = getByText("Add Todo");
  //   input.value = "mark new todo as completed";
  //   fireEvent.click(button);
  //   const completed = await findByRole("checkbox");
  //   expect(completed?.checked).toBe(false);
  //   fireEvent.click(completed);
  //   expect(completed?.checked).toBe(true);
  //   const text = getByText("mark new todo as completed");
  //   expect(text).toHaveStyle({ "text-decoration": "line-through" });
  //   unmount();
  // });
});
