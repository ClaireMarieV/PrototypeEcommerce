const TwoColumns = ({ children }) => (
  <div className="container-focus">
    <img src="" />
    <style jsx>{`
      .container {
        display: grid;
        grid-template-rows: 1fr;
        gap: 2rem;
        justify-self: center;
        margin: 4rem auto;
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
