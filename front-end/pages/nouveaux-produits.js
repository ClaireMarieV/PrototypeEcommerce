import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import sub from "date-fns/sub";
import ProductList from "../components/ProductList";
import Loading from "../components/Loading";
import OneColumn from "../components/OneColumn";

const NewProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const oneWeekAgo = sub(new Date(), {
    days: 7,
  });

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch("/api/produits?skip=0")
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
    <Layout currentPage="new-products">
      {error && <Error />}
      {loading && <Loading />}
      {!loading && !error && (
        <ProductList
          products={products.filter(
            (product) => new Date(product.published_at) > oneWeekAgo
          )}
        />
      )}
    </Layout>
  );
};
export default NewProductsPage;
