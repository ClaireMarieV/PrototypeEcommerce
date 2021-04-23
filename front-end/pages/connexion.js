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
  const [loading, setLoading] = useState(false);

  const connect = () => {
    setLoading(true);
    setError(null);
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
      <style jsx>{``}</style>
    </Layout>
  );
};
export default ConnectPage;
