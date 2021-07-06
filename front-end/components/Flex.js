const Flex = ({ children }) => (
  <div className="container">
    {children}
    <style jsx>{`
      .container {
        display: flex;
        gap: 2rem;
        justify-self: center;
        width: 85vw;
        height: 100%;
        overflow: auto;
      }
      @media (max-width: 800px) {
        .container {
          width: 100%;
          display: inherit;
        }
      }
    `}</style>
  </div>
);

export default Flex;
