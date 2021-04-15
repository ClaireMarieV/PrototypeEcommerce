import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import ProductList from "../../components/ProductList";
import { useRouter } from "next/router";

const Search = (product) => {
  const router = useRouter();
  const { recherche } = router.query;
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const value = (event) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    if (recherche) {
      setLoading(true);
      setError(null);
      fetch("/api/produits/search/" + recherche)
        .then((response) => response.json())
        .then((result) => {
          setProducts(result);
          setLoading(false);
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
        });
    }
  }, [recherche]);

  return (
    <Layout>
      <div className="search">
        <span>
          Votre recherche : <span>{recherche}</span>
        </span>
        <div>
          <ProductList products={products} />
        </div>
        <style jsx>{`
          .search {
            display: inline-flex;
            gap: 1rem;
          }
        `}</style>
      </div>
    </Layout>
  );
};

export default Search;
