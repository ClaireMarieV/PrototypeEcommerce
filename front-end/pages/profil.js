import Layout from "../components/Layout";

const ProfilPage = () => {
  return (
    <Layout>
      <div className="form">
        <h2>Bienvenue sur votre profil</h2>

        <div className="div">
          <input placeholder="Nom" />
        </div>
        <div className="div">
          <input placeholder="Prénom" />
        </div>
        <div className="div">
          <input placeholder="Adresse" />
        </div>
        <div className="div">
          <input placeholder="Ville" />
        </div>
        <div className="div">
          <input placeholder="Code postal" />
        </div>
        <div className="div">
          <input placeholder="Email" />
        </div>
        <div className="div">
          <input placeholder="Numéro de téléphone" />
        </div>
      </div>
      <style jsx>{`
        .form {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: 1rem;
          align-self: center;
          justify-self: center;
          justify-items: center;
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
