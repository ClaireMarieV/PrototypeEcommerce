import { useState, useEffect } from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import OneColumn from "../components/OneColumn";
import TwoColumns from "../components/TwoColumns";
import DeliveryType from "../components/DeliveryType";
import CartProduct from "../components/CartProduct";
import { useStore } from "../lib/store";

const DeliveryPage = () => {
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [postal, setPostal] = useState("");
  const [town, setTown] = useState("");
  const [number, setNumber] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const products = useStore((state) => (state.cart ? state.cart.products : []));
  const total =
    Math.round(products.reduce((acc, product) => product.prix + acc, 0) * 100) /
    100;

  const order = () => {
    setLoading(true);
    setError(null);
    fetch("/api/orders", {
      method: "POST",
      body: JSON.stringify({
        lastname,
        firstname,
        email,
        address,
        postal,
        town,
        number,
      }),
    })
      .then((response) => response.json())
      .then(({ jwt }) => {
        Cookies.set("token", jwt);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };

  return (
    <Layout>
      <h2>Livraison</h2>
      <TwoColumns>
        <section>
          <section className="form">
            <label>
              Email
              <input
                required
                type="text"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </label>
            <label>
              Nom
              <input
                required
                type="text"
                value={lastname}
                onChange={(event) => setLastname(event.target.value)}
              />
            </label>
            <label>
              Prénom
              <input
                required
                type="text"
                value={firstname}
                onChange={(event) => setFirstname(event.target.value)}
              />
            </label>
            <label>
              Adresse
              <input
                required
                type="text"
                value={address}
                onChange={(event) => setAddress(event.target.value)}
              />
            </label>
            <label>
              Code postal
              <input
                required
                type="text"
                value={postal}
                onChange={(event) => setPostal(event.target.value)}
              />
            </label>
            <label>
              Ville
              <input
                required
                type="text"
                value={town}
                onChange={(event) => setTown(event.target.value)}
              />
            </label>
          </section>
        </section>
        <OneColumn>
          <DeliveryType />
          <section>
            <h2>Resumé de la commande</h2>
            <div className="order-resume">
              <span>Total des articles: {total}</span>
              <span>Frais de port:</span>
              <span className="total">TOTAL: {total}</span>
            </div>
            <Link href="/paiement">
              <a>
                <button onClick={order}>Paiement</button>
              </a>
            </Link>
          </section>
        </OneColumn>
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
          gap: 1rem;
        }
        .form {
          display: grid;
          flex-direction: column;
          grid-template-columns: 1fr;
        }
        .form div {
          display: flex;
          flex-direction: column;
          margin: 0.5rem;
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
export default DeliveryPage;
