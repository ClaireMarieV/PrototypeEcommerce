import { useState, useEffect } from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import TwoColumns from "../components/TwoColumns";
import CartProduct from "../components/CartProduct";
import { useStore } from "../lib/store";

const ResumePage = () => {
  const products = useStore((state) => (state.cart ? state.cart.products : []));
  const total =
    Math.round(products.reduce((acc, product) => product.prix + acc, 0) * 100) /
    100;
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const order = () => {
    setLoading(true);
    setError(null);
    fetch("/api/orders", {
      method: "POST",
    })
      .then((response) => response.json())
      .then(({ jwt }) => {
        Cookies.set("token", jwt);
      })
      .then(() => {
        window.location = "/";
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };
  useEffect(() => {
    order();
  }, []);

  return (
    <Layout>
      <h2>Paiement</h2>
      <TwoColumns>
        <section>
          <CartProduct products={products} />
        </section>
        <section>
          <h2>Résumé de la commande</h2>
          <div className="order-resume">
            <span>Total des articles: {total}</span>
            <span>Frais de port:</span>
            <span className="total">TOTAL: {total}</span>
          </div>
          <Link href="/">
            <a>
              <button onClick={order}>Paiement</button>
            </a>
          </Link>
        </section>
      </TwoColumns>
      <style jsx>{`
        display: flex;
        flex-direction: column;
        margin: 0.5rem 0;
        h2 {
          text-transform: uppercase;
          justify-content: flex-end;
        }
        section {
          gap: 2rem;
        }

        section > button {
          width: fit-content;
          align-self: flex-end;
        }
        h2 {
          width: fit-content;
        }
        .total {
          font-weight: 600;
        }
        @media (max-width: 700px) {
          .form {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </Layout>
  );
};
export default ResumePage;
