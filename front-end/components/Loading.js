const Error = () => (
  <div className="container-loading">
    <h1>Loading</h1>
    <section>
      <span>Encore une pointe de patience</span>
    </section>
    <style jsx>{`
      .container-loading {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        justify-items: center;
        gap: 2rem;
        margin: 4rem auto;
      }
      h1 {
        color: #a49cc9;
        text-transform: uppercase;
        font-size: 5rem;
      }
      secton {
        display: flex;
        flex-direction: column;
        font-size: 2rem;
      }
      img {
        max-width: 50rem;
        width: 100%;
      }
      @media (max-width: 500px) {
        .container {
          width: 100%;
        }
      }
    `}</style>
  </div>
);

export default Error;
