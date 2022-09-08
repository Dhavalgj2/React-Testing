import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greetings from "./Greetings";

test("renders Hello World as a text", () => {
  render(<Greetings />);

  const helloWorldElement = screen.getByText("Hello World!");
  expect(helloWorldElement).toBeInTheDocument();
});

test("renders good to see you if the button was NOT clicked ", () => {
  render(<Greetings />);

  const outputElement = screen.getByText("good to see you", { exact: false });
  expect(outputElement).toBeInTheDocument();
});

test('renders "Changed!" if the button was clicked', () => {
  render(<Greetings />);

  // ACT
  const buttonElement = screen.getByRole("button");
  userEvent.click(buttonElement);

  //ASSERT
  const outputElement = screen.getByText("Changed!");
  expect(outputElement).toBeInTheDocument();
});

test('does not render "good to see  you" if the button was clicked', () => {
  render(<Greetings />);

  const buttonElement = screen.getByRole("button");
  userEvent.click(buttonElement);

  //ASSERT
  const outputElement = screen.queryByText("good to see you", { exact: false });
  expect(outputElement).toBeNull();
});
