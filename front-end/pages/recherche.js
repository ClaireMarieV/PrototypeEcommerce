import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Search from "../components/Search";
import ProductList from "../components/ProductList";

const ListingPage = () => {
  const [searchs, setSearchs] = useState([]);
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
      <ProductList products={products} />
    </Layout>
  );
};
export default ListingPage;
