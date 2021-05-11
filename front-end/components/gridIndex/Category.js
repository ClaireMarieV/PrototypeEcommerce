import Link from "next/link";

const Category3 = ({ category }) => (
  <section className="container-category-3">
    <span>{category.name}</span>
    <button>Load More</button>
    <style jsx>{`
      .container-category-3 {
        grid-column: 1 / 4;
        justify-self: center;
        margin: 2rem auto;
        font-size: 2rem;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        border-bottom: 2px solid;
        width: 100%;
        align-items: center;
      }
    `}</style>
  </section>
);

export { Category3 };
