import Image from "next/image";
import Link from "next/link";

const ImageProduct3 = ({ product, src }) => (
  <section className="container-image-product-3">
    <img src={src} width="800" height="650" />
    <div className="product-button">
      <span>{product.slug}</span>
      <Link href={"/produit/" + product.slug}>
        <a>
          <button>Découvrir</button>
        </a>
      </Link>
    </div>
    <style jsx>{`
      .container-image-product-3 {
        grid-column: 1 / 4;
        justify-self: center;
        margin: 2rem auto;
        font-size: 2rem;
        padding: 2rem;
        display: flex;
        flex-direction: row;
        gap: 2rem;
        width: 100%;
        align-items: center;
      }

      .product-button {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
      }
    `}</style>
  </section>
);

export { ImageProduct3 };

const ImageProduct4 = ({ product, src, href }) => (
  <section className="container-image-product-4">
    <img src={src} width="800" height="650" />
    <div className="product-button">
      <span>{product.slug}</span>
      <Link key={product.id} href={href}>
        <a>
          <button>Découvrir</button>
        </a>
      </Link>
    </div>
    <style jsx>{`
      .container-image-product-4 {
        grid-column: 1 / 5;
        justify-self: center;
        margin: 2rem auto;
        font-size: 2rem;
        padding: 2rem;
        display: flex;
        flex-direction: row;
        gap: 2rem;
        width: 100%;
        align-items: center;
      }

      .product-button {
        align-items: center;
        display: flex;
        flex-direction: column;
      }
    `}</style>
  </section>
);

export { ImageProduct4 };

const ImageProduct6 = ({ product, src, href }) => (
  <section className="container-image-product-6">
    <img src={src} width="500" height="300" />
    <div className="product-button">
      <span>{product.slug}</span>
      <Link key={product.id} href={href}>
        <a>
          <button>Découvrir</button>
        </a>
      </Link>
    </div>
    <style jsx>{`
      .container-image-product-6 {
        grid-column: 1 / 7;
        justify-self: center;
        margin: 2rem auto;
        font-size: 2rem;
        padding: 2rem;
        display: flex;
        flex-direction: row;
        gap: 2rem;
        width: 100%;
        align-items: center;
      }

      .product-button {
        align-items: center;
        display: flex;
        flex-direction: column;
      }
    `}</style>
  </section>
);
export { ImageProduct6 };

const ImageProduct9 = ({ product, src }) => (
  <section className="container-image-product-9">
    <img src={src} width="800" height="650" />
    <div className="product-button">
      <span>{product.slug}</span>
      <Link key={product.id} href={"/produit/" + product.slug}>
        <a>
          <button>Découvrir</button>
        </a>
      </Link>
    </div>
    <style jsx>{`
      .container-image-product-9 {
        grid-column: 1 / 10;
        justify-self: center;
        margin: 2rem auto;
        font-size: 2rem;
        padding: 2rem;
        display: flex;
        flex-direction: row;
        gap: 2rem;
        width: 100%;
        align-items: center;
      }

      .product-button {
        align-items: center;
        display: flex;
        flex-direction: column;
      }
    `}</style>
  </section>
);
export { ImageProduct9 };

const ImageProduct12 = ({ product, src }) => (
  <section className="container-image-product-12">
    <img src={src} width="800" height="650" />
    <div className="product-button">
      <span>{product.slug}</span>
      <Link key={product.id} href={"/produit/" + product.slug}>
        <a>
          <button>Découvrir</button>
        </a>
      </Link>
    </div>
    <style jsx>{`
      .container-image-product-12 {
        grid-column: 1 / 13;
        justify-self: center;
        margin: 2rem auto;
        font-size: 2rem;
        padding: 2rem;
        display: flex;
        flex-direction: row;
        gap: 2rem;
        width: 100%;
        align-items: center;
      }

      .product-button {
        align-items: center;
        display: flex;
        flex-direction: column;
      }
    `}</style>
  </section>
);

export { ImageProduct12 };
