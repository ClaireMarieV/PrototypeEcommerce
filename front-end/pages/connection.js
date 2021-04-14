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
        <div className="connect">
          <h2>CONNECTEZ-VOUS</h2>
          <section>
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
              <button onClick={connect}>Se connecter</button>
            </div>
          </section>
        </div>
        <div>
          <h2>INSCRIVEZ-VOUS</h2>
          <span>
            Rejoignez HABAAH et bénéficiez d'une experience simplifié!
          </span>
          <Link href="/register">
            <a>
              <button>Créer un compte</button>
            </a>
          </Link>
        </div>
      </TwoColumns>
      <style jsx>{`
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0.5rem;
        justify-content: center;

        .connect {
        }
        section > input {
          width: 35% !important;
        }
      `}</style>
    </Layout>
  );
};
export default ConnectPage;
