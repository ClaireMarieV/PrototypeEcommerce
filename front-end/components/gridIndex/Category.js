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
    <Link
      key={element.category._id}
      href={"/categorie/" + element.category.slug}
    >
      <a>
        <div>
          <span>categorie</span>
          <h5>{element.category.label}</h5>
        </div>
      </a>
    </Link>
    <style jsx>{`
      section > div {
        display: flex;
        flex-direction: column;
        gap: 1rem;
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
      .container-category-3 {
        display: flex;
        margin: 2rem auto;
        letter-spacing: 0.2rem;
        font-size: 2rem;
        padding: 2rem;
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
    <Link
      key={element.category._id}
      href={"/categorie/" + element.category.slug}
    >
      <a>
        <div>
          <span>categorie</span>
          <h5>{element.category.label}</h5>
        </div>
      </a>
    </Link>
    <style jsx>{`
      section > div {
        display: flex;
        flex-direction: column;
        gap: 1rem;
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
      .container-category-4 {
        display: flex;
        margin: 2rem auto;
        letter-spacing: 0.2rem;
        font-size: 2rem;
        padding: 2rem;
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
    <Link
      key={element.category._id}
      href={"/categorie/" + element.category.slug}
    >
      <a>
        <div>
          <span>categorie</span>
          <h5>{element.category.label}</h5>
        </div>
      </a>
    </Link>
    <style jsx>{`
      section > div {
        display: flex;
        flex-direction: column;
        gap: 1rem;
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
      .container-category-6 {
        display: flex;
        margin: 2rem auto;
        letter-spacing: 0.2rem;
        font-size: 2rem;
        padding: 2rem;
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
    <Link
      key={element.category._id}
      href={"/categorie/" + element.category.slug}
    >
      <a>
        <div>
          <span>categorie</span>
          <h5>{element.category.label}</h5>
        </div>
      </a>
    </Link>
    <style jsx>{`
      section > div {
        display: flex;
        flex-direction: column;
        gap: 1rem;
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

      .container-category-8 {
        display: flex;
        margin: 2rem auto;
        letter-spacing: 0.2rem;
        font-size: 2rem;
        padding: 2rem;
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
    <Link
      key={element.category._id}
      href={"/categorie/" + element.category.slug}
    >
      <a>
        <div>
          <span>categorie</span>
          <h5>{element.category.label}</h5>
        </div>
      </a>
    </Link>
    <style jsx>{`
      section > div {
        display: flex;
        flex-direction: column;
        gap: 1rem;
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
      .container-category-9 {
        display: flex;
        margin: 2rem auto;
        font-size: 2rem;
        padding: 2rem;
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
    <Link
      key={element.category._id}
      href={"/categorie/" + element.category.slug}
    >
      <a>
        <div>
          <span>categorie</span>
          <h5>{element.category.label}</h5>
        </div>
      </a>
    </Link>
    <style jsx>{`
      section > div {
        display: flex;
        flex-direction: column;
        gap: 1rem;
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
      .container-category-12 {
        display: flex;
        margin: 2rem auto;
        letter-spacing: 0.2rem;
        font-size: 2rem;
        padding: 2rem;
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
