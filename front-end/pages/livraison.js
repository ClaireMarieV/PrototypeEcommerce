import React, { useState } from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import OneColumn from "../components/OneColumn";
import TwoColumns from "../components/TwoColumns";
import DeliveryType from "../components/DeliveryType";
import CartProduct from "../components/CartProduct";
import { useStore } from "../lib/store";

const InfoUserPage = () => {
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [adress, setAdress] = useState("");
  const [postal, setPostal] = useState("");
  const [town, setTown] = useState("");
  const [number, setNumber] = useState("");

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const register = () => {
    setLoading(true);
    setError(null);
    fetch("/api/register", {
      method: "post",
      body: JSON.stringify({ lastname, firstname, email, password }),
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
  const products = useStore((state) => (state.cart ? state.cart.products : []));
  const total =
    Math.round(products.reduce((acc, product) => product.prix + acc, 0) * 100) /
    100;
  return (
    <Layout>
      <h2>Livraison</h2>
      <TwoColumns>
        <section>
          <section className="form">
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
                value={adress}
                onChange={(event) => setAdress(event.target.value)}
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
            <label>
              Numero de telephone
              <input
                required
                type="text"
                value={number}
                onChange={(event) => setNumber(event.target.value)}
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
                <button>Paiement</button>
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
          gap: 2rem;
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
export default InfoUserPage;
