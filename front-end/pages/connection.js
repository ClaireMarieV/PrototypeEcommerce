import React, { useState } from "react";
import Layout from "../components/Layout";
import Cookies from "js-cookie";
import TwoColumns from "../components/TwoColumns";
import Link from "next/link";

const ConnectPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const connect = () => {
    setLoading(true);
    setError(null);
    fetch("/api/auth", {
      method: "post",
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then(({ jwt }) => {
        Cookies.set("jwt", jwt);
      })
      .then(() => {
        window.location = "/profil";
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };

  return (
    <Layout>
      <TwoColumns>
        <div>
          <h2>INSCRIVEZ-VOUS</h2>
          <p>
            SI VOUS N'AVEZ PAS ENCORE DE COMPTE D'UTILISATEUR, UTILISEZ CETTE
            OPTION POUR ACCÉDER AU FORMULAIRE D'INSCRIPTION. NOUS VOUS
            DEMANDERONS LES INFORMATIONS NOUS PERMETTANT D'ACCÉLÉRER LE
            PROCESSUS D'ACHAT.
          </p>
          <Link href="/register">
            <a>
              <button>Créer un compte</button>
            </a>
          </Link>
        </div>

        <div>
          <h2>CONNECTEZ-VOUS</h2>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <div className="button">
            <button onClick={connect}>Se connecter</button>
          </div>
        </div>
      </TwoColumns>
      <style jsx>{`
        div {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 0.5rem;
        }
        .button {
          margin: auto;
        }
      `}</style>
    </Layout>
  );
};
export default ConnectPage;
