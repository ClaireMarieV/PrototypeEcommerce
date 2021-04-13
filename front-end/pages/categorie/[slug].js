import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import ProductList from "../../components/ProductList";
const Category = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [category, setCategory] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

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
    <Layout>{category && <ProductList products={category.produits} />}</Layout>
  );
};

export default Category;
