import { useEffect, useState } from "react";
import Axios from "axios";
import { Product } from "../interfaces";

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setLoading(true);
    Axios.get("products.json")
      .then((response) => setProducts(response.data))
      .catch(() => setHasError(true))
      .finally(() => setLoading(false));
  }, []);
  return { products, loading, hasError };
};
