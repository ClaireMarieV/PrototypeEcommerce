const TwoColumns = ({ children }) => (
  <div className="container">
    {children}
    <style jsx>{`
      .container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        justify-self: center;
        align-items: baseline;
        grid-gap: 2rem;
        height: 100%;
        width: 100%;
      }
      @media (max-width: 1430px) {
        .container {
          grid-template-columns: 1fr;
        }
      }
    `}</style>
  </div>
);

export default TwoColumns;
