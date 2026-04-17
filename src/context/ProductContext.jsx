import { createContext, useEffect, useState } from "react";
import { getAllProducts } from "../services/productService";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await getAllProducts();
        setProducts(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // ======= search functionality =======
  const [search, setSearch] = useState("");

  // ======= debounce search input =======
  const [debouncedSearch, setDebouncedSearch] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  return (
    <ProductContext.Provider
      value={{ products, loading, search, setSearch, debouncedSearch }}
    >
      {children}
    </ProductContext.Provider>
  );
};
