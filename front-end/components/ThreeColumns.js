const Container = ({ children }) => (
  <div className="container">
    {children}
    <style jsx>{`
      .container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        justify-items: center;
        column-gap: 1rem;
        row-gap: 4rem;
        width: 100%;
      }
      @media (max-width: 1300px) {
        .container {
          grid-template-columns: repeat(2, 1fr);
        }
      }
      @media (max-width: 900px) {
        .container {
          grid-template-columns: auto;
        }
      }
    `}</style>
  </div>
);

export default Container;
