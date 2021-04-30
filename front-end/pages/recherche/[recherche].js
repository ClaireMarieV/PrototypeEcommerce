import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import ProductList from "../../components/ProductList";
import { useRouter } from "next/router";
import Loading from "../../components/Loading";
import Error from "../../components/Error";

const Search = (product) => {
  const router = useRouter();
  const { recherche } = router.query;
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
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
      {error && <Error />}
      {loading && <Loading />}
      {!loading && !error && (
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
      )}
    </Layout>
  );
};

export default Search;
