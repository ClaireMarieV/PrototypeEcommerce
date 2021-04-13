const Container = ({ children }) => (
  <div className="container">
    {children}
    <style jsx>{`
      .container {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        justify-self: center;
        grid-gap: 2rem;
        margin-top: 4rem;
      }
    `}</style>
  </div>
);

export default Container;
