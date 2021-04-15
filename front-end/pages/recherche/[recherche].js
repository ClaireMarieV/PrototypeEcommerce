import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";

const Search = (product) => {
  const router = useRouter();
  const { recherche } = router.query;
  const [search, setSearch] = useState("");
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
      fetch("/api/produits/search/" + search)
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

        <style jsx>{`
          .search {
            display: inline-flex;
            gap: 1rem;
          }
          .search img {
            width: 2rem;
          }
        `}</style>
      </div>
    </Layout>
  );
};

export default Search;
