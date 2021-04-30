import React, { useState, useEffect } from "react";
import Link from "next/link";

const Filter = ({ children }) => {
  return (
    <div>
      <ul>
        <li>
          <h3>Categories</h3>
        </li>
        {(Array.isArray(children) ? children : [children]).map((child) => (
          <li>{child}</li>
        ))}
        <Link href="/produits">
          <a>
            <li>Shop all</li>
          </a>
        </Link>
      </ul>
      <style jsx>{`
        ul {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          list-style: none;
          text-transform: capitalize;
          border-right: 1px solid black;
          padding: 1rem;
          height: 100%;
        }
      `}</style>
    </div>
  );
};

export default Filter;
