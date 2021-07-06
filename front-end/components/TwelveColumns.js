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
      @media (max-width: 800px) {
        .container-twelve-columns {
          width: 100%;
          grid-template-columns: auto;
        }
      }
    `}</style>
  </div>
);

export default HorizontalFocus;
