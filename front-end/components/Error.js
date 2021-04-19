const TwoColumns = ({ children }) => (
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
        gap: 2rem;
        justify-self: center;
        margin: 4rem auto;
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
  </div>
);

export default TwoColumns;
