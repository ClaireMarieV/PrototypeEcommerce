import React, { useState, useEffect } from "react";
import Link from "next/link";

const Filter = ({ categorySlug }) => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch("/api/categories")
      .then((response) => response.json())
      .then((categories) => {
        setCategories(categories);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return (
    <ul>
      {categories.map((category) => (
        <li key={category.id}>
          <Link href={"/categorie/" + category.slug}>
            <a className={category.slug === categorySlug ? "focus" : ""}>
              {category.label}
            </a>
          </Link>
        </li>
      ))}
      <li>
        <Link href="/produits">
          <a className={categorySlug ? "" : "focus"}>Tout voir</a>
        </Link>
      </li>
      <style jsx>{`
        ul {
          display: flex;
          gap: 2rem;
          list-style: none;
          text-transform: uppercase;
          padding: 1rem;
        }
        ul > li {
          flex: auto;
        }
        ul > li > span {
          font-size: 1.3rem;
        }
        ul > li a.focus {
          font-weight: 600;
        }
        @media (max-width: 600px) {
          ul {
            display: grid;
            grid-template-columns: auto auto;
            justify-items: baseline;
          }
        }
      `}</style>
    </ul>
  );
};

export default Filter;
