import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import ProductList from "../components/ProductList";
import Error from "../components/Error";
import Loading from "../components/Loading";
import Filter from "../components/Filter";
import Link from "next/link";
import OneColumn from "../components/OneColumn";
import TwoColumns from "../components/TwoColumns";

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

  return (
    <Layout>
      {error && <Error />}
      {loading && <Loading />}
      {!loading && !error && (
        <TwoColumns>
          <Filter>
            {categories.map((category) => (
              <Link key={category.slug} href={"/categorie/" + category.slug}>
                <a onClick={() => console.log("bonjour")}>{category.label}</a>
              </Link>
            ))}
          </Filter>
          <OneColumn>
            <ProductList products={produits} />
            <button onClick={loadProducts}>Load More</button>
          </OneColumn>
        </TwoColumns>
      )}

      <style jsx>{`
        .products:nth-child(1) li {
          position: relative;
          font-weight: 500;
          letter-spacing: 0.05rem;
        }
        .products:nth-child(1) li > ul:nth-child(1) {
          margin: 2rem;
          position: absolute;
          align-items: baseline;
        }
        .products:nth-child(1) li > ul:nth-child(1) li {
          visibility: hidden;
        }

        div:nth-child(1) > ul:nth-child(1) li:hover > ul:nth-child(1) li {
          visibility: visible;
        }
        button {
          width: fit-content;
          height: fit-content;
          padding: 1rem;
          border-radius: 5px;
          justify-self: center;
        }
      `}</style>
    </Layout>
  );
};
export default ProductsPage;
