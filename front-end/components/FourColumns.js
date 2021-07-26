const Container = ({ children }) => (
  <div className="container">
    {children}
    <style jsx>{`
      .container {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        justify-items: center;
        column-gap: 2rem;
        row-gap: 3rem;
        width: 100%;
      }
      @media (max-width: 1600px) {
        .container {
          grid-template-columns: repeat(3, 1fr);
        }
      }
      @media (max-width: 1200px) {
        .container {
          grid-template-columns: repeat(2, 1fr);
        }
      }
      @media (max-width: 750px) {
        .container {
          grid-template-columns: auto;
        }
      }
    `}</style>
  </div>
);

export default Container;
