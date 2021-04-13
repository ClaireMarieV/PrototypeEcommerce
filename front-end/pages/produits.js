import React, { useState, useEffect } from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import ThreeColumns from "../components/ThreeColumns";
import Picture from "../components/Picture";
import ShopButton from "../components/ShopButton";
const ListingPage = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch("/api/produits")
      .then((response) => response.json())
      .then((products) => {
        setProducts(products);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return (
    <Layout>
      <ThreeColumns>
        {products
          .filter((product) => product.images.length)
          .map((product) => (
            <Link href={"/produit/" + product.id}>
              <a>
                <div>
                  <Picture
                    picture={{
                      picture:
                        process.env.BACKOFFICE_HOST +
                        product.images[0].formats.small.url,
                    }}
                  />
                  <div>
                    <span>{product.label}</span>
                  </div>
                  <div>
                    <span>{product.prix}</span>
                  </div>
                  <ShopButton />
                </div>
              </a>
            </Link>
          ))}
      </ThreeColumns>
      <style jsx>{`
        a {
          justify-self: center;
        }
      `}</style>
    </Layout>
  );
};
export default ListingPage;
