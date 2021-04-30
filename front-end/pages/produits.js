import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import ProductList from "../components/ProductList";
import FourColumns from "../components/FourColumns";
import Error from "../components/Error";
import Loading from "../components/Loading";
import Filter from "../components/Filter";
import Link from "next/link";
import TwoColumns from "../components/TwoColumns";

const ProductsPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [categories, setCategories] = useState([]);
  const [produits, setProduits] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/produits")
      .then((response) => response.json())
      .then((produits) => {
        setProduits(produits);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
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
          <ProductList products={produits} />
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
      `}</style>
    </Layout>
  );
};
export default ProductsPage;
