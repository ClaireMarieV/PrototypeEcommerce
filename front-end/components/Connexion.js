import { useState, useEffect } from "react";
import Link from "next/link";
import Cookies from "js-cookie";
import TwoColumns from "./TwoColumns";
const Connexion = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const connect = () => {
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
          <button onClick={connect}>Se connecter</button>
        </div>
      </div>
      <div className="register">
        <h2>INSCRIVEZ-VOUS</h2>
        <span>Rejoignez HABAAH et bénéficiez d'une experience simplifié!</span>
        <Link href="/inscription">
          <a>
            <button>Créer un compte</button>
          </a>
        </Link>

        <style jsx>{`
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
  );
};

export default Connexion;
