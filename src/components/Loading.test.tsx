import { render, screen } from "@testing-library/react";
import Loading from "./Loading";

describe("Loading Component", () => {
  test("should display the loading message", () => {
    render(<Loading />);
    const loadingElement = screen.getByText(/Loading Data.../i);
    expect(loadingElement).toBeInTheDocument();
  });
});
