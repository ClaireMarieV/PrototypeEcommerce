import React, { useState } from "react";
import Layout from "../components/Layout";

const InscriptionPage = () => {
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
        Cookies.set("jwt", jwt);
      })
      .then(() => {
        window.location = "/";
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };

  return (
    <Layout>
      <div className="container">
        <div className="form">
          <h2>INSCRIVEZ-VOUS</h2>
          <div>
            <label htmlFor="lastname">Nom</label>
            <input
              type="text"
              value={lastname}
              onChange={(event) => setLastname(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="firstname">Prénom</label>
            <input
              type="text"
              value={firstname}
              onChange={(event) => setFirstname(event.target.value)}
            />
          </div>
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
        </div>
        <div className="button">
          <button onClick={register}>Bienvenue</button>
        </div>
      </div>
      <style jsx>{`
        .container {
          width: 44rem;
          margin: auto;
        }
        .form {
          display: grid;
          flex-direction: column;
          grid-template-columns: repeat(2, minmax(0, 1fr));
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
export default InscriptionPage;
