const TwoColumnsAlign = ({ children }) => (
  <div className="container">
    {children}
    <style jsx>{`
      .container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        justify-self: center;
        grid-gap: 2rem;
        height: 100%;
        display: grid;
        align-items: center;
      }
    `}</style>
  </div>
);

export default TwoColumnsAlign;
