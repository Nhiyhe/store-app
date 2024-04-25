import { render } from "@testing-library/react";
import Error from "./Error";
import "@testing-library/jest-dom";

test("renders learn vite link", () => {
  const { getByText } = render(<Error />);
  const linkElement = getByText(/we encountered issues when getting data/i);
  expect(linkElement).toBeInTheDocument();
});
