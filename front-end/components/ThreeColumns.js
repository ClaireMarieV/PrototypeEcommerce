const Container = ({ children }) => (
  <div className="container">
    {children}
    <style jsx>{`
      .container {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        justify-self: center;
        grid-gap: 2rem;
        height: 100%;
        margin: 4rem 2rem 4rem 2rem;
      }
      @media (max-width: 1100px) {
        .container {
          grid-template-columns: repeat(2, 1fr);
        }
      }
      @media (max-width: 500px) {
        .container {
          grid-template-columns: 1fr;
        }
      }
    `}</style>
  </div>
);

export default Container;
