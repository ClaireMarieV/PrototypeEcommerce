const HorizontalFocus = ({ children }) => (
  <div className="container-twelve-columns">
    {children}
    <style jsx>{`
      .container-twelve-columns {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        column-gap: 3rem;
        row-gap: 10rem;
      }
      @media (max-width: 500px) {
        .container-twelve-columns {
          width: 100%;
        }
      }
    `}</style>
  </div>
);

export default HorizontalFocus;
