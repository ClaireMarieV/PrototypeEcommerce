import Layout from "../components/Layout";
import OneColumn from "../components/OneColumn";
import { useState, useEffect } from "react";
import { useStore } from "../lib/store";

const ProfilPage = () => {
  const user = useStore((state) => state.user);
  const updateUser = useStore((state) => state.updateUser);

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [town, setTown] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  const [postal, setPostal] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (user) {
      setFirstname(user.firstname || "");
      setLastname(user.lastname || "");
      setTown(user.town || "");
      setAddress(user.address || "");
      setNumber(user.number || "");
      setPostal(user.postal || "");
      setEmail(user.email || "");
      setPassword(user.password || "");
    }
  }, [user]);
  return (
    <Layout>
      <OneColumn>
        <h2>Bienvenue sur votre profil</h2>
        <section className="form">
          <label>
            Nom
            <input
              type="text"
              value={lastname}
              onChange={(event) => setLastname(event.target.value)}
            />
          </label>
          <label>
            Prénom
            <input
              type="text"
              value={firstname}
              onChange={(event) => setFirstname(event.target.value)}
            />
          </label>
          <label>
            Adresse
            <input
              type="text"
              value={address}
              onChange={(event) => setAddress(event.target.value)}
            />
          </label>
          <label>
            Ville
            <input
              type="text"
              value={town}
              onChange={(event) => setTown(event.target.value)}
            />
          </label>
          <label>
            Code postal
            <input
              type="text"
              value={postal}
              onChange={(event) => setPostal(event.target.value)}
            />
          </label>
          <label>
            Email
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>
          <label>
            Mot de passe
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>
          <label>
            Numéro de telephone
            <input
              type="phone"
              value={number}
              onChange={(event) => setNumber(event.target.value)}
            />
          </label>
          <button
            onClick={() =>
              updateUser({
                firstname,
                lastname,
                town,
                address,
                number,
                postal,
                email,
              })
            }
          >
            EDIT INFORMATIONS
          </button>
        </section>
      </OneColumn>
      <style jsx>{`
        .form {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: 2rem;
          width: 60vw;
          margin: auto;
        }
        @media (max-width: 900px) {
          .form {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </Layout>
  );
};
export default ProfilPage;
