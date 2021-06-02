const TwoColumns = ({ children }) => (
  <div className="container">
    {children}
    <style jsx>{`
      .container {
        display: grid;
        grid-template-columns: repeat(2, auto);
        justify-self: center;
        grid-gap: 2rem;
        height: 100%;
      }
      @media (max-width: 900px) {
        .container {
          grid-template-columns: 1fr;
        }
      }
    `}</style>
  </div>
);

export default TwoColumns;
