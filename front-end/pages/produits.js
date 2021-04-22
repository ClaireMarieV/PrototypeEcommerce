import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import ProductList from "../components/ProductList";
import FourColumns from "../components/FourColumns";
import Error from "../components/Error";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
        {error && <Error />}
        {loading && <div>je charge</div>}
        {!loading && !error && <ProductList products={products} />}
      </FourColumns>
    </Layout>
  );
};
export default ProductsPage;
