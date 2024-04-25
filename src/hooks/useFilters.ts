import { useEffect, useState } from "react";
import { Product } from "../interfaces";

const useFilters = (products: Product[]) => {
  const [term, setTerm] = useState("");
  const [sortBy, setSortBy] = useState("cheapitems");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    let updatedProducts = [...products];
    if (term) {
      updatedProducts = filteredProducts.filter((product) =>
        product.name.toLowerCase().includes(term.toLowerCase())
      );
    }

    if (sortBy === "cheapitems") {
      updatedProducts?.sort((a: Product, b: Product) => a.price - b.price);
      updatedProducts = updatedProducts.slice(0, 5);
    } else if (sortBy === "allitems") {
      updatedProducts?.sort((a: Product, b: Product) =>
        a.name.localeCompare(b.name)
      );
    }

    setFilteredProducts(updatedProducts);
  }, [products, term, sortBy, filteredProducts]);
  return { filteredProducts, term, setTerm, sortBy, setSortBy };
};

export default useFilters;
