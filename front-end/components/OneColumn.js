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
    `}</style>
  </div>
);

export default OneColumn;
