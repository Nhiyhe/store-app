import { render, screen, fireEvent } from "@testing-library/react";
import FilterBox from "./FilterBox";

describe("FilterBox Component", () => {
  test("renders the correct initial option", () => {
    const setSortBy = jest.fn();
    render(<FilterBox sortBy="cheapitems" setSortBy={setSortBy} />);

    const selectElement = screen.getByRole("combobox") as HTMLSelectElement;
    expect(selectElement.value).toBe("cheapitems");
  });

  test("changes value when a different option is selected", () => {
    const setSortBy = jest.fn();
    render(<FilterBox sortBy="cheapitems" setSortBy={setSortBy} />);

    const selectElement = screen.getByRole("combobox");
    fireEvent.change(selectElement, { target: { value: "allitems" } });
    expect(setSortBy).toHaveBeenCalledWith("allitems");
  });
});
