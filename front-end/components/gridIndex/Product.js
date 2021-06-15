import Link from "next/link";

const Product3 = ({ element, gridMultiplier }) => (
  <section
    className="container-product-3"
    style={{
      gridColumn: `${element.column * gridMultiplier + 1} / span ${
        element.columnSpan * gridMultiplier
      }`,
      margin: "auto",
    }}
  >
    <div>
      <h5>{element.category.label}</h5>
      <span>{element.product.label}</span>
    </div>
    <Link key={element.product.id} href={"/produit/" + element.product.slug}>
      <a>
        <button>Decouvrir</button>
      </a>
    </Link>
    <style jsx>{`
      .container-product-3 {
        grid-column: 1 / 10;
        justify-self: center;
        margin: 2rem auto;
        font-size: 2rem;
        padding-top: 2rem;
        display: flex;
        gap: 2rem;
        width: 100%;
        align-items: center;
      }
      .container-product-3 > div {
        text-transform: uppercase;
        font-size: 2.5rem;
        font-family: p22-underground, sans-serif;
        font-weight: 600;
        font-style: normal;
      }

      h5 {
        margin: 0;
        font-weight: 400;
      }
    `}</style>
  </section>
);

export { Product3 };

const Product4 = ({ element, gridMultiplier }) => (
  <section
    className="container-product-4"
    style={{
      gridColumn: `${element.column * gridMultiplier + 1} / span ${
        element.columnSpan * gridMultiplier
      }`,
      margin: "auto",
    }}
  >
    <div>
      <h5>{element.category.label}</h5>
      <span>{element.product.label}</span>
    </div>
    <Link key={element.product.id} href={"/produit/" + element.product.slug}>
      <a>
        <button>Decouvrir</button>
      </a>
    </Link>
    <style jsx>{`
      .container-product-4 {
        grid-column: 1 / 10;
        justify-self: center;
        margin: 2rem auto;
        font-size: 2rem;
        padding-top: 2rem;
        display: flex;
        gap: 2rem;
        width: 100%;
        align-items: center;
      }
      .container-product-4 > div {
        text-transform: uppercase;
        font-size: 2.5rem;
        font-family: p22-underground, sans-serif;
        font-weight: 600;
        font-style: normal;
      }

      h5 {
        margin: 0;
        font-weight: 400;
      }
    `}</style>
  </section>
);

export { Product4 };

const Product6 = ({ element, gridMultiplier }) => (
  <section
    className="container-product-6"
    style={{
      gridColumn: `${element.column * gridMultiplier + 1} / span ${
        element.columnSpan * gridMultiplier
      }`,
      margin: "auto",
    }}
  >
    <div>
      <h5>{element.category.label}</h5>
      <span>{element.product.label}</span>
    </div>
    <Link key={element.product.id} href={"/produit/" + element.product.slug}>
      <a>
        <button>Decouvrir</button>
      </a>
    </Link>
    <style jsx>{`
      .container-product-6 {
        grid-column: 1 / 10;
        justify-self: center;
        margin: 2rem auto;
        font-size: 2rem;
        padding-top: 2rem;
        display: flex;
        gap: 2rem;
        width: 100%;
        align-items: center;
      }
      .container-product-6 > div {
        text-transform: uppercase;
        font-size: 2.5rem;
        font-family: p22-underground, sans-serif;
        font-weight: 600;
        font-style: normal;
      }

      h5 {
        margin: 0;
        font-weight: 400;
      }
    `}</style>
  </section>
);
export { Product6 };

const Product8 = ({ element, gridMultiplier }) => (
  <section
    className="container-product-8"
    style={{
      gridColumn: `${element.column * gridMultiplier + 1} / span ${
        element.columnSpan * gridMultiplier
      }`,
      margin: "auto",
    }}
  >
    <div>
      <h5>{element.category.label}</h5>
      <span>{element.product.label}</span>
    </div>
    <Link key={element.product.id} href={"/produit/" + element.product.slug}>
      <a>
        <button>Decouvrir</button>
      </a>
    </Link>
    <style jsx>{`
      .container-product-8 {
        grid-column: 1 / 10;
        justify-self: center;
        margin: 2rem auto;
        font-size: 2rem;
        padding-top: 2rem;
        display: flex;
        gap: 2rem;
        width: 100%;
        align-items: center;
      }
      .container-product-8 > div {
        text-transform: uppercase;
        font-size: 2.5rem;
        font-family: p22-underground, sans-serif;
        font-weight: 600;
        font-style: normal;
      }

      h5 {
        margin: 0;
        font-weight: 400;
      }
    `}</style>
  </section>
);
export { Product8 };

const Product9 = ({ element, gridMultiplier }) => (
  <section
    className="container-product-9"
    style={{
      gridColumn: `${element.column * gridMultiplier + 1} / span ${
        element.columnSpan * gridMultiplier
      }`,
      margin: "auto",
    }}
  >
    <div>
      <h5>{element.category.label}</h5>
      <span>{element.product.label}</span>
    </div>
    <Link key={element.product.id} href={"/produit/" + element.product.slug}>
      <a>
        <button>Decouvrir</button>
      </a>
    </Link>
    <style jsx>{`
      .container-product-9 {
        grid-column: 1 / 10;
        justify-self: center;
        margin: 2rem auto;
        font-size: 2rem;
        padding-top: 2rem;
        display: flex;
        gap: 2rem;
        width: 100%;
        align-items: center;
      }
      .container-product-9 > div {
        text-transform: uppercase;
        font-size: 2.5rem;
        font-family: p22-underground, sans-serif;
        font-weight: 600;
        font-style: normal;
      }

      h5 {
        margin: 0;
        font-weight: 400;
      }
    `}</style>
  </section>
);
export { Product9 };

const Product12 = ({ element, gridMultiplier }) => (
  <section
    className="container-product-12"
    style={{
      gridColumn: `${element.column * gridMultiplier + 1} / span ${
        element.columnSpan * gridMultiplier
      }`,
      margin: "auto",
    }}
  >
    <div>
      <h5>{element.category.label}</h5>
      <span>{element.product.label}</span>
    </div>
    <Link key={element.product.id} href={"/produit/" + element.product.slug}>
      <a>
        <button>Decouvrir</button>
      </a>
    </Link>
    <style jsx>{`
      .container-product-12 {
        grid-column: 1 / 10;
        justify-self: center;
        margin: 2rem auto;
        font-size: 2rem;
        padding-top: 2rem;
        display: flex;
        gap: 2rem;
        width: 100%;
        align-items: center;
      }
      .container-product-12 > div {
        text-transform: uppercase;
        font-size: 2.5rem;
        font-family: p22-underground, sans-serif;
        font-weight: 600;
        font-style: normal;
      }

      h5 {
        margin: 0;
        font-weight: 400;
      }
    `}</style>
  </section>
);

export { Product12 };
