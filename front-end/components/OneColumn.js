const OneColumn = ({ children }) => (
  <div className="container">
    {children}
    <style jsx>{`
      .container {
        display: grid;
        grid-template-columns: 1fr;
        gap: 2rem;
        justify-self: center;
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

export default OneColumn;
