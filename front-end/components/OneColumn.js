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
        margin: 4rem auto;
        width: 60vw;
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
