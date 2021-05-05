import React, { useState, useEffect } from "react";
import Link from "next/link";

const Filter = ({ children }) => {
  const [categories, setCategories] = useState([]);
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
        <h3>Categories</h3>
      </li>
      {categories.map((category) => (
        <Link key={category.key} href={"/categorie/" + category.slug}>
          <a>{category.label}</a>
        </Link>
      ))}
      <Link href="/produits">
        <a>
          <li>Shop all</li>
        </a>
      </Link>
      <style jsx>{`
        ul {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          list-style: none;
          text-transform: capitalize;
          padding: 1rem;
        }
      `}</style>
    </ul>
  );
};

export default Filter;
