const Flex = ({ children }) => (
  <div className="container">
    {children}
    <style jsx>{`
      .container {
        display: flex;
        gap: 2rem;
        justify-self: center;
        width: 60vw;
        height: 100%;
        margin: 4rem auto;
      }
      @media (max-width: 500px) {
        .container {
          width: 100%;
        }
      }
    `}</style>
  </div>
);

export default Flex;
