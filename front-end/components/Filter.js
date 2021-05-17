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
      <li>
        <span>Filtre</span>
      </li>
      {categories.map((category) => (
        <li key={category.key}>
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
          flex-direction: column;
          gap: 2rem;
          list-style: none;
          text-transform: capitalize;
          padding: 1rem;
          justify-self: center;
        }
        ul > li a.focus {
          font-weight: 600;
        }
      `}</style>
    </ul>
  );
};

export default Filter;
