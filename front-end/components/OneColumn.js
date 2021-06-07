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
    `}</style>
  </div>
);

export default OneColumn;
