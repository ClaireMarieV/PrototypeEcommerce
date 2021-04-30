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
    `}</style>
  </div>
);

export default TwoColumns;
