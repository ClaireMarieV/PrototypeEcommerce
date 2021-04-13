import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import sub from "date-fns/sub";
import ProductList from "../components/ProductList";

const ListingPage = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const oneWeekAgo = sub(new Date(), {
    months: 1,
  });

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
      <ProductList
        products={products.filter(
          (product) => new Date(product.published_at) > oneWeekAgo
        )}
      />
    </Layout>
  );
};
export default ListingPage;
