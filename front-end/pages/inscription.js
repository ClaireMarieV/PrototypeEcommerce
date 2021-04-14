import React, { useState } from "react";
import Layout from "../components/Layout";
import OneColumn from "../components/OneColumn";
const InscriptionPage = () => {
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

  return (
    <Layout>
      <OneColumn>
        <h2>informations personnelles</h2>
        <section className="form">
          <input
            type="text"
            placeholder="Nom"
            value={lastname}
            onChange={(event) => setLastname(event.target.value)}
          />
          <input
            type="text"
            placeholder="Prénom"
            value={firstname}
            onChange={(event) => setFirstname(event.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <input
            type="text"
            placeholder="Adresse"
            value={adress}
            onChange={(event) => setAdress(event.target.value)}
          />
          <input
            type="text"
            placeholder="Code postal"
            value={postal}
            onChange={(event) => setPostal(event.target.value)}
          />
          <input
            type="text"
            placeholder="Ville"
            value={town}
            onChange={(event) => setTown(event.target.value)}
          />
          <input
            type="text"
            placeholder="Téléphone"
            value={number}
            onChange={(event) => setNumber(event.target.value)}
          />
        </section>
        <div className="button">
          <button onClick={register}>Bienvenue</button>
        </div>
      </OneColumn>
      <style jsx>{`
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0.5rem;

        h2 {
          text-transform: uppercase;
          justify-content: flex-end;
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
        h2 {
          width: fit-content;
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
export default InscriptionPage;
