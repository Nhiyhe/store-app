import { render, screen } from "@testing-library/react";
import ProductList from "./ProductList";
import { Product } from "../interfaces";

describe("ProductList Component", () => {
  const products: Product[] = [
    { name: "Product A", price: 50.0 },
    { name: "Product B", price: 75.0 },
    { name: "Product C", price: 20.0 },
  ];

  test("renders multiple ProductCard components", () => {
    render(<ProductList products={products} />);

    products.forEach((product) => {
      expect(screen.getByText(`Name: ${product.name}`)).toBeInTheDocument();
      expect(
        screen.getByText(`Price: £${product.price.toFixed(2)}`)
      ).toBeInTheDocument();
    });
  });

  //   test("renders correct number of products", () => {
  //     render(<ProductList products={products} />);
  //     const productCards = screen.getAllByRole("li");
  //     expect(productCards.length).toBe(products.length);
  //   });
});
