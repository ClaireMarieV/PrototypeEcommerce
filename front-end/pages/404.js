import Layout from "../components/Layout";
import Error from "../components/Error";

const NotFoundPage = () => (
  <Layout>
    <div className="container-focus">
      <img src="/svg/404.svg" />
      <section>
        <span>Oh non! Une erreur 404 </span>
        <span>Retournez à la page d'accueil</span>
      </section>
      <style jsx>{`
        .container-focus {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          align-items: center;
          justify-items: center;
          gap: 2rem;
          margin: 4rem auto;
        }
        secton {
          display: flex;
          flex-direction: column;
          font-size: 2rem;
        }
        img {
          max-width: 50rem;
          width: 100%;
        }
        @media (max-width: 500px) {
          .container {
            width: 100%;
          }
        }
      `}</style>
    </div>{" "}
  </Layout>
);
export default NotFoundPage;
