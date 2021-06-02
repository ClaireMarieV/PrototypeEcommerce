const Container = ({ children }) => (
  <div className="container">
    {children}
    <style jsx>{`
      .container {
        display: grid;
        grid-template-rows: repeat(2);
        justify-items: center;
        gap: 2rem;
      }
      @media (max-width: 1300px) {
        .container {
          grid-template-columns: 1fr;
        }
      }
    `}</style>
  </div>
);

export default Container;
