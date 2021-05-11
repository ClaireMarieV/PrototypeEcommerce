import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import Error from "../components/Error";
import Loading from "../components/Loading";
import Link from "next/link";

useEffect(() => {
  if (slug) {
    fetch("/api/categories/" + slug)
      .then((response) => response.json())
      .then((category) => {
        setCategory(category);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }
}, [slug]);
const ProductsPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [categories, setCategories] = useState([]);
  const [produits, setProduits] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadProducts = () => {
    setLoading(true);
    setError(null);
    fetch("/api/produits?skip=" + produits.length)
      .then((response) => response.json())
      .then((p) => {
        setProduits(produits.concat(p));
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <Layout>
      {error && <Error />}
      {loading && <Loading />}
      {!loading && !error && (
        <TwoColumns>
          <Filter />
          <OneColumn>
            <ProductList products={produits} />
            <button onClick={loadProducts}>Load More</button>
          </OneColumn>
        </TwoColumns>
      )}

      <style jsx>{``}</style>
    </Layout>
  );
};
export default ProductsPage;
