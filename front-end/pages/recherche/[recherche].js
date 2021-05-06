import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import ProductList from "../../components/ProductList";
import { useRouter } from "next/router";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import OneColumn from "../../components/OneColumn";

const Search = (product) => {
  const router = useRouter();
  const { recherche } = router.query;
  const [search, setSearch] = useState({ recherche });

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
        <OneColumn>
          <div className="search">
            <input
              type="text"
              value={search}
              onKeyUp={(event) => {
                console.log(event);
                if (event.keyCode === 13) {
                  router.push("/recherche/" + search);
                }
              }}
              onChange={value}
            />
            <ProductList products={products} />
            <style jsx>{`
              .search {
                display: flex;
                gap: 3rem;
                flex-direction: column;
              }
              input {
                font-size: 2rem;
              }
            `}</style>
          </div>
        </OneColumn>
      )}
    </Layout>
  );
};

export default Search;
