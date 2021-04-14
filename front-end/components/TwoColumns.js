const TwoColumns = ({ children }) => (
  <div className="container">
    {children}
    <style jsx>{`
      .container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        justify-self: center;
        grid-gap: 2rem;
        height: 100vh;
      }
    `}</style>
  </div>
);

export default TwoColumns;
