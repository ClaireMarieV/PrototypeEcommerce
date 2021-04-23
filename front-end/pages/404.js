import Layout from "../components/Layout";
import Link from "next/link";

const NotFoundPage = () => (
  <Layout>
    <div className="container-focus">
      <img src="/svg/404.svg" />
      <section>
        <span>Ooooops cette page n'existe pas</span>
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
      </section>
      <style jsx>{`
        .container-focus {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          align-items: center;
          justify-items: center;
          margin: 4rem auto;
        }
        section {
          display: flex;
          flex-direction: column;
          font-size: 2rem;
          gap: 1rem;
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

        button {
          border-radius: 10px;
        }
        @media (max-width: 500px) {
          .container {
            width: 100%;
          }
        }
      `}</style>
    </div>
  </Layout>
);
export default NotFoundPage;
