import React, { useState } from "react";
import Layout from "../components/Layout";
import OneColumn from "../components/OneColumn";

const InscriptionPage = () => {
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmationPassword, setConfirmationPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const register = () => {
    setLoading(true);
    setError(null);
    fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({
        lastname,
        firstname,
        email,
        password,
        confirmationPassword,
      }),
    })
      .then((response) => response.json())
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
      <OneColumn>
        <section>
          <h2>informations personnelles</h2>
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
              Email
              <input
                required
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </label>
            <label>
              Password
              <input
                required
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </label>
            <label>
              Password Confirmation
              <input
                required
                type="password"
                value={confirmationPassword}
                onChange={(event) =>
                  setConfirmationPassword(event.target.value)
                }
              />
            </label>
          </section>
          {password === confirmationPassword && (
            <button onClick={register}>Bienvenue</button>
          )}
          {password != confirmationPassword && (
            <span>Les mots ne sont pas identiques</span>
          )}
        </section>
      </OneColumn>
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
          grid-template-columns: repeat(2, minmax(0, 1fr));
          width: 100%;
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
