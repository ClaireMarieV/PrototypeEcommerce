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

  const oneMonthAgo = sub(new Date(), {
    months: 1,
  });

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch("/api/produits?skip=0")
      .then((response) => response.json())
      .then((products) => {
        console.log(products);
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
      {error && <Error />}
      {loading && <Loading />}
      {!loading && !error && (
        <OneColumn>
          <h2>New products</h2>
          <ProductList
            products={products.filter(
              (product) => new Date(product.published_at) > oneMonthAgo
            )}
          />
        </OneColumn>
      )}
    </Layout>
  );
};
export default NewProductsPage;
