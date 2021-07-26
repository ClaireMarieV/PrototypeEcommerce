const Flex = ({ children }) => (
  <div className="container">
    {children}
    <style jsx>{`
      .container {
        display: flex;
        gap: 6rem;
        justify-self: center;
        width: 85vw;
        height: 100%;
        overflow: auto;
        margin: auto;
      }
      @media (max-width: 800px) {
        .container {
          width: 100%;
          display: flex;
          gap: 3rem;
          flex-direction: column;
        }
      }
    `}</style>
  </div>
);

export default Flex;
