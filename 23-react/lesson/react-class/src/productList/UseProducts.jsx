import { useEffect, useState } from "react";
import { getProducts } from "../api/products";

export function useProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((res) => setProducts(res));
  }, []);

  return products;
}
