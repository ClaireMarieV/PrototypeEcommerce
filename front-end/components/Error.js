const Error = () => (
  <div className="container-error">
    <h1>error</h1>
    <section>
      <span>Oh non une erreur est survenue!</span>
    </section>
    <style jsx>{`
      .container-error {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        justify-items: center;
        gap: 2rem;
        margin: 4rem auto;
        width: 50vw;
        padding: 2rem;
        border-image-source: linear-gradient(to right, #a49cc9, #ff0134);
        border: 5px solid transparent;
        border-image-slice: 1;
        border-width: 5px;
      }
      h1 {
        color: ;
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
