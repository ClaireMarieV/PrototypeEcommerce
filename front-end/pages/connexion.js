import React, { useState } from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import Cookies from "js-cookie";
import Connexion from "../components/Connexion";
import Error from "../components/Error";
import Loading from "../components/Loading";
import TwoColumns from "../components/TwoColumns";

const ConnectPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const connect = () => {
    setLoading(true);
    setError(null);
    fetch("/api/login", {
      method: "post",
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then(({ jwt }) => {
        Cookies.set("token", jwt);
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
      {error && <Error />}
      {loading && <Loading />}
      {!loading && !error && (
        <TwoColumns>
          <div className="connect">
            <h2>CONNECTEZ-VOUS</h2>
            <label htmlFor="email">
              Email
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </label>
            <label htmlFor="password">
              Password
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </label>
            <div className="button">
              <button onClick={connect} disabled={loading}>
                Se connecter
              </button>
            </div>
          </div>
          <div className="register">
            <h2>INSCRIVEZ-VOUS</h2>
            <span>
              Rejoignez HABAAH et bénéficiez d'une experience simplifié!
            </span>
            <Link href="/inscription">
              <a>
                <button>Créer un compte</button>
              </a>
            </Link>

            <style jsx global>{`
              .connect,
              .register {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 1rem;
              }

              input {
              }
            `}</style>
          </div>
        </TwoColumns>
      )}
    </Layout>
  );
};
export default ConnectPage;
