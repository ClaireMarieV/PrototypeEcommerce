import React, { useState } from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import Cookies from "js-cookie";
import Connexion from "../components/Connexion";
import Error from "../components/Error";
import Loading from "../components/Loading";

const ConnectPage = () => {
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
    <Layout>
      {error && <Error />}
      {loading && <Loading />}
      {!loading && !error && <Connexion />}
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
