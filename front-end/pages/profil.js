import Layout from "../components/Layout";

const ProfilPage = () => {
  return (
    <Layout>
      <div className="form">
        <h2>Bienvenue sur votre profil</h2>

        <div className="div">
          <label>Nom</label>
          <input></input>
        </div>
        <div className="div">
          <label>Prénom</label>
          <input></input>
        </div>
        <div className="div">
          <label>Adresse</label>
          <input></input>
        </div>
        <div className="div">
          <label>Ville</label>
          <input></input>
        </div>
        <div className="div">
          <label>Code Postal</label>
          <input></input>
        </div>
        <div className="div">
          <label>Email</label>
          <input />
        </div>
        <div className="div">
          <label>Numéro de téléphone</label>
          <input />
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
