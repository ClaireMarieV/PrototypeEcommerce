import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import Product from "../../components/Product";

const ProductPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      fetch("/api/produits/" + slug)
        .then((response) => response.json())
        .then((product) => {
          setProduct(product);
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
      {!loading && !error && product && <Product product={product} />}
    </Layout>
  );
};

export default ProductPage;
