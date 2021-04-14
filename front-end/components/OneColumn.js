const TwoColumns = ({ children }) => (
  <div className="container">
    {children}
    <style jsx>{`
      .container {
        display: grid;
        grid-template-columns: minmax(0, 1fr);
        justify-self: center;
        width: 50vw;
        height: 100%;
        margin: auto;
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
