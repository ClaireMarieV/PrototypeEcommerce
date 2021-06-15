import Link from "next/link";

const Category3 = ({ element, gridMultiplier }) => (
  <section
    className="container-category-3"
    style={{
      gridColumn: `${element.column * gridMultiplier + 1} / span ${
        element.columnSpan * gridMultiplier
      }`,
      margin: "auto",
    }}
  >
    <span>{element.category.label}</span>
    <Link
      key={element.category.id}
      href={"/categorie/" + element.category.slug}
    >
      <a>
        <button>Decouvrir</button>
      </a>
    </Link>
    <style jsx>{`
      .container-category-3 {
        justify-self: center;
        margin: 2rem auto;
        font-size: 2rem;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        width: 100%;
        align-items: center;
      }
      .container-category > span {
        text-transform: uppercase;
        font-family: p22-underground, sans-serif;
        font-weight: 600;
        font-style: normal;
      }
    `}</style>
  </section>
);

export { Category3 };

const Category4 = ({ element, gridMultiplier }) => (
  <section
    className="container-category-4"
    style={{
      gridColumn: `${element.column * gridMultiplier + 1} / span ${
        element.columnSpan * gridMultiplier
      }`,
      margin: "auto",
    }}
  >
    <span>{element.category.label}</span>
    <Link
      key={element.category.id}
      href={"/categorie/" + element.category.slug}
    >
      <a>
        <button>Decouvrir</button>
      </a>
    </Link>
    <style jsx>{`
      .container-category-4 {
        justify-self: center;
        margin: 2rem auto;
        font-size: 2rem;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        width: 100%;
        align-items: center;
      }
      .container-category-4 > span {
        text-transform: uppercase;
        font-family: p22-underground, sans-serif;
        font-weight: 600;
        font-style: normal;
      }
    `}</style>
  </section>
);

export { Category4 };

const Category6 = ({ element, gridMultiplier }) => (
  <section
    className="container-category-6"
    style={{
      gridColumn: `${element.column * gridMultiplier + 1} / span ${
        element.columnSpan * gridMultiplier
      }`,
      margin: "auto",
    }}
  >
    <span>{element.category.label}</span>
    <Link
      key={element.category.id}
      href={"/categorie/" + element.category.slug}
    >
      <a>
        <button>Decouvrir</button>
      </a>
    </Link>
    <style jsx>{`
      .container-category-6 {
        justify-self: center;
        margin: 2rem auto;
        font-size: 2rem;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        width: 100%;
        align-items: center;
      }
      .container-category-6 > span {
        text-transform: uppercase;
        font-family: p22-underground, sans-serif;
        font-weight: 600;
        font-style: normal;
      }
    `}</style>
  </section>
);
export { Category6 };

const Category8 = ({ element, gridMultiplier }) => (
  <section
    className="container-category-8"
    style={{
      gridColumn: `${element.column * gridMultiplier + 1} / span ${
        element.columnSpan * gridMultiplier
      }`,
      margin: "auto",
    }}
  >
    <span>{element.category.label}</span>
    <Link
      key={element.category.id}
      href={"/categorie/" + element.category.slug}
    >
      <a>
        <button>Decouvrir</button>
      </a>
    </Link>
    <style jsx>{`
      .container-category-8 {
        justify-self: center;
        margin: 2rem auto;
        font-size: 2rem;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        width: 100%;
        align-items: center;
      }
      .container-category-8 > span {
        text-transform: uppercase;
        font-family: p22-underground, sans-serif;
        font-weight: 600;
        font-style: normal;
      }
    `}</style>
  </section>
);
export { Category8 };

const Category9 = ({ element, gridMultiplier }) => (
  <section
    className="container-category-9"
    style={{
      gridColumn: `${element.column * gridMultiplier + 1} / span ${
        element.columnSpan * gridMultiplier
      }`,
      margin: "auto",
    }}
  >
    <span>{element.category.label}</span>
    <Link
      key={element.category.id}
      href={"/categorie/" + element.category.slug}
    >
      <a>
        <button>Decouvrir</button>
      </a>
    </Link>
    <style jsx>{`
      .container-category-9 {
        justify-self: center;
        margin: 2rem auto;
        font-size: 2rem;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        width: 100%;
        align-items: center;
      }
      .container-category-9 > span {
        text-transform: uppercase;
        font-family: p22-underground, sans-serif;
        font-weight: 600;
        font-style: normal;
      }
    `}</style>
  </section>
);
export { Category9 };

const Category12 = ({ element, gridMultiplier }) => (
  <section
    className="container-category-12"
    style={{
      gridColumn: `${element.column * gridMultiplier + 1} / span ${
        element.columnSpan * gridMultiplier
      }`,
      margin: "auto",
    }}
  >
    <span>{element.category.label}</span>
    <Link
      key={element.category.id}
      href={"/categorie/" + element.category.slug}
    >
      <a>
        <button>Decouvrir</button>
      </a>
    </Link>
    <style jsx>{`
      .container-category-12 {
        justify-self: center;
        margin: 2rem auto;
        font-size: 2rem;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        width: 100%;
        align-items: center;
      }
      .container-category-12 > span {
        text-transform: uppercase;
        font-family: p22-underground, sans-serif;
        font-weight: 600;
        font-style: normal;
      }
    `}</style>
  </section>
);

export { Category12 };
