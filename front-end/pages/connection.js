import React, { useState } from "react";
import Layout from "../components/Layout";
import Cookies from "js-cookie";
import Container from "../components/Container";
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
      <Container>
        <div className="form">
          <h2>CONNECTEZ-VOUS</h2>

          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div className="button">
            <button onClick={connect}>Se connecter</button>
          </div>
        </div>
        <div>
          <h2>INSCRIVEZ-VOUS</h2>
          <div className="button">
            <Link href="/inscription">
              <a>
                <button>Créer un compte</button>
              </a>
            </Link>
          </div>
        </div>
      </Container>
      <style jsx>{`
        .form {
          display: flex;
          flex-direction: column;
        }
        .form div {
          display: flex;
          flex-direction: column;
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
