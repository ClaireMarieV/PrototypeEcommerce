import Link from "next/link";

const Error = () => (
  <div className="container-error">
    <h1>error</h1>
    <span>
      Oh non une erreur est survenue! Il doit manquer quelque chose...
    </span>
    <div className="help">
      <Link href="/">
        <a>
          <button>Homepage</button>
        </a>
      </Link>
      <Link href="/contact">
        <a>
          <button>Contact</button>
        </a>
      </Link>
    </div>
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

      img {
        max-width: 50rem;
        width: 100%;
      }
      .help {
        display: grid;
        grid-template-columns: 1fr 1fr;
        justify-items: center;
        gap: 2rem;
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
