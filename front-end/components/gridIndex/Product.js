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
      <span>{element.product.categorie.label}</span>
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
        letter-spacing: 0.2rem;
        font-size: 2rem;
        padding-top: 2rem;
        display: flex;
        gap: 2rem;
        width: 100%;
        align-items: flex-end;
      }
      .container-product-3 > div {
        text-transform: uppercase;
        font-family: p22-underground, sans-serif;
        font-weight: 400;
        font-style: normal;
        gap: 1rem;
        display: flex;
        flex-direction: column;
      }

      div > span {
        font-family: felt-tip-senior, serif;
        text-transform: uppercase;
        font-weight: 400;
        font-style: normal;
        font-size: 1.5rem;
      }
      div > h5 {
        text-transform: uppercase;
        margin: 0;
        font-weigh: 600;
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
    <Link key={element.product.id} href={"/produit/" + element.product.slug}>
      <a>
        <div>
          <span>{element.product.categorie.label}</span>
          <h5>{element.product.label}</h5>
        </div>
      </a>
    </Link>
    <style jsx>{`
      .container-product-4 {
        grid-column: 1 / 10;
        justify-self: center;
        margin: 2rem auto;
        letter-spacing: 0.2rem;
        font-size: 2rem;
        padding-top: 2rem;
        display: flex;
        gap: 2rem;
        width: 100%;
        align-items: flex-end;
      }
      .container-product-4 > div {
        text-transform: uppercase;
        font-family: p22-underground, sans-serif;
        font-weight: 400;
        font-style: normal;
        gap: 1rem;
        display: flex;
        flex-direction: column;
      }

      div > span {
        font-family: felt-tip-senior, serif;
        text-transform: uppercase;
        font-weight: 400;
        font-style: normal;
        font-size: 1.5rem;
      }
      div > h5 {
        text-transform: uppercase;
        margin: 0;
        font-weigh: 600;
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
    <Link key={element.product.id} href={"/produit/" + element.product.slug}>
      <a>
        <div>
          <span>{element.product.categorie.label}</span>
          <h5>{element.product.label}</h5>
        </div>
      </a>
    </Link>
    <style jsx>{`
      .container-product-6 {
        grid-column: 1 / 10;
        justify-self: center;
        margin: 2rem auto;
        letter-spacing: 0.2rem;
        font-size: 2rem;
        padding-top: 2rem;
        display: flex;
        gap: 2rem;
        width: 100%;
        align-items: flex-end;
      }
      .container-product-6 > div {
        text-transform: uppercase;
        font-family: p22-underground, sans-serif;
        font-weight: 400;
        font-style: normal;
        gap: 1rem;
        display: flex;
        flex-direction: column;
      }

      div > span {
        font-family: felt-tip-senior, serif;
        text-transform: uppercase;
        font-weight: 400;
        font-style: normal;
        font-size: 1.5rem;
      }
      div > h5 {
        text-transform: uppercase;
        margin: 0;
        font-weigh: 600;
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
    <Link key={element.product.id} href={"/produit/" + element.product.slug}>
      <a>
        <div>
          <span>{element.product.categorie.label}</span>
          <h5>{element.product.label}</h5>
        </div>
      </a>
    </Link>
    <style jsx>{`
      .container-product-8 {
        grid-column: 1 / 10;
        justify-self: center;
        margin: 2rem auto;
        letter-spacing: 0.2rem;
        font-size: 2rem;
        padding-top: 2rem;
        display: flex;
        gap: 2rem;
        width: 100%;
        align-items: flex-end;
      }
      .container-product-8 > div {
        text-transform: uppercase;
        font-family: p22-underground, sans-serif;
        font-weight: 400;
        font-style: normal;
        gap: 1rem;
        display: flex;
        flex-direction: column;
      }

      div > span {
        font-family: felt-tip-senior, serif;
        text-transform: uppercase;
        font-weight: 400;
        font-style: normal;
        font-size: 1.5rem;
      }
      div > h5 {
        text-transform: uppercase;
        margin: 0;
        font-weigh: 600;
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
    <Link key={element.product.id} href={"/produit/" + element.product.slug}>
      <a>
        <div>
          <span>{element.product.categorie.label}</span>
          <h5>{element.product.label}</h5>
        </div>
      </a>
    </Link>
    <style jsx>{`
      .container-product-9 {
        grid-column: 1 / 10;
        justify-self: center;
        margin: 2rem auto;
        letter-spacing: 0.2rem;
        font-size: 2rem;
        padding-top: 2rem;
        display: flex;
        gap: 2rem;
        width: 100%;
        align-items: flex-end;
      }
      .container-product-9 > div {
        text-transform: uppercase;
        font-family: p22-underground, sans-serif;
        font-weight: 400;
        font-style: normal;
        gap: 1rem;
        display: flex;
        flex-direction: column;
      }

      div > span {
        font-family: felt-tip-senior, serif;
        text-transform: uppercase;
        font-weight: 400;
        font-style: normal;
        font-size: 1.5rem;
      }
      div > h5 {
        text-transform: uppercase;
        margin: 0;
        font-weigh: 600;
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
    <Link key={element.product.id} href={"/produit/" + element.product.slug}>
      <a>
        <div>
          <span>{element.product.categorie.label}</span>
          <h5>{element.product.label}</h5>
        </div>
      </a>
    </Link>
    <style jsx>{`
      .container-product-12 {
        grid-column: 1 / 10;
        justify-self: center;
        margin: 2rem auto;
        letter-spacing: 0.2rem;
        font-size: 2rem;
        padding-top: 2rem;
        display: flex;
        gap: 2rem;
        width: 100%;
        align-items: flex-end;
      }
      .container-product-12 > div {
        text-transform: uppercase;
        font-family: p22-underground, sans-serif;
        font-weight: 400;
        font-style: normal;
        gap: 1rem;
        display: flex;
        flex-direction: column;
      }

      div > span {
        font-family: felt-tip-senior, serif;
        text-transform: uppercase;
        font-weight: 400;
        font-style: normal;
        font-size: 1.5rem;
      }
      div > h5 {
        text-transform: uppercase;
        margin: 0;
        font-weigh: 600;
      }
    `}</style>
  </section>
);

export { Product12 };
