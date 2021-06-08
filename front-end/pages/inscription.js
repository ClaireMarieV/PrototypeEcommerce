import React, { useState } from "react";
import Layout from "../components/Layout";
import OneColumn from "../components/OneColumn";
const InscriptionPage = () => {
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
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
      body: JSON.stringify({
        lastname,
        firstname,
        email,
        password,
        postal,
        address,
        town,
        number,
      }),
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
          <button onClick={register}>Bienvenue</button>
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
