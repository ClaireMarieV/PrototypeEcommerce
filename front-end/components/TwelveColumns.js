const HorizontalFocus = ({ children }) => (
  <div className="container-focus">
    {children}
    <style jsx>{`
      .container-focus {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
      }
      @media (max-width: 500px) {
        .container-focus {
          width: 100%;
        }
      }
    `}</style>
  </div>
);

export default HorizontalFocus;
