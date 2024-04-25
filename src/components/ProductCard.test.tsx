import { render, screen } from "@testing-library/react";
import ProductCard from "./ProductCard";
import { Product } from "../interfaces";

describe("ProductCard Component", () => {
  const product: Product = {
    name: "Example Product",
    price: 19.99,
  };

  test("renders product details correctly", () => {
    render(<ProductCard product={product} />);

    const nameElement = screen.getByText(`Name: ${product.name}`);
    const priceElement = screen.getByText(
      `Price: £${product.price.toFixed(2)}`
    );

    expect(nameElement).toBeInTheDocument();
    expect(priceElement).toBeInTheDocument();
  });
});
