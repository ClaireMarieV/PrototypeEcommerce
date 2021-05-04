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
        <div className="form">
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
            type="text"
            placeholder="Adresse"
            value={address}
            onChange={(event) => setAddress(event.target.value)}
          />
          <input
            type="text"
            placeholder="Ville"
            value={town}
            onChange={(event) => setTown(event.target.value)}
          />
          <input
            type="text"
            placeholder="Code postal"
            value={postal}
            onChange={(event) => setPostal(event.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <input
            type="phone"
            placeholder="Numéro de téléphone"
            value={number}
            onChange={(event) => setNumber(event.target.value)}
          />
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
        </div>
      </OneColumn>
      <style jsx>{`
        .form {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: 2rem;
          width: 60vw;
          margin: auto;
        }
        .div {
          flex-direction: column;
          display: flex;
          width: 18rem;
        }
      `}</style>
    </Layout>
  );
};
export default ProfilPage;
