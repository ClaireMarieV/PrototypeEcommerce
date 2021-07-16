const OneColumn = ({ children }) => (
  <div className="container">
    {children}
    <style jsx>{`
      .container {
        display: grid;
        grid-template-columns: 1fr;
        gap: 5rem;
        justify-self: center;
        height: 100%;
        width: 75vw;
        margin: auto;
      }
      @media (max-width: 1000px) {
        .container {
          width: 100%;
        }
      }
    `}</style>
  </div>
);

export default OneColumn;
