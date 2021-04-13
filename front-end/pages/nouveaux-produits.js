import React, { useState, useEffect } from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import ThreeColumns from "../components/ThreeColumns";
import Picture from "../components/Picture";
import sub from "date-fns/sub";
import ShopButton from "../components/ShopButton";
const ListingPage = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const oneWeekAgo = sub(new Date(), {
    months: 1,
  });

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
          .filter((product) => new Date(product.published_at) > oneWeekAgo)
          .map((product) => (
            <Link href={"/produit/" + product.id}>
              <a>
                <div className="img">
                  <Picture
                    picture={{
                      picture:
                        process.env.NEXT_PUBLIC_BACKOFFICE_HOST +
                        product.images[0].formats.small.url,
                    }}
                  />
                </div>
                <div>{product.Label}</div>
                <div>{product.prix}</div>
                <ShopButton />
              </a>
            </Link>
          ))}
      </ThreeColumns>
      <style jsx>{`
        a {
          justify-self: center;
          align-items: center;
        }

        .name-product {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .button {
          border: 1px solid;
        }
      `}</style>
    </Layout>
  );
};
export default ListingPage;
