import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import ProductList from "../../components/ProductList";
import Filter from "../../components/Filter";
import TwoColumns from "../../components/TwoColumns";
import OneColumn from "../../components/OneColumn";

const Category = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [category, setCategory] = useState(null);
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
      {category && (
        <>
          <TwoColumns>
            <OneColumn>
              <ProductList products={category.produits} />
              <button onClick={loadProducts}>Load More</button>
            </OneColumn>
            <Filter categorySlug={slug} />
          </TwoColumns>
        </>
      )}
      <style jsx>{`
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

export default Category;
