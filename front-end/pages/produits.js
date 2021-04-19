import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import ProductList from "../components/ProductList";
import FourColumns from "../components/FourColumns";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch("/api/produits")
      .then((response) => response.json())
      .then((products) => {
        setProducts(products);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return (
    <Layout>
      <FourColumns>
        <ProductList products={products} />
      </FourColumns>
    </Layout>
  );
};
export default ProductsPage;
