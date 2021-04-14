import { useState, useEffect } from "react";
import Link from "next/link";

const Header = () => {
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
    <header>
      <nav>
        <div>
          <ul className="products">
            <li>
              COLLECTION
              <ul>
                {categories.map((category) => (
                  <li>
                    <Link href={"/categorie/" + category.slug}>
                      <a>{category.label}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <Link href="/nouveaux-produits">
                <a>NOUVEAUTÉS</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>ABOUT US</a>
              </Link>
            </li>
          </ul>
        </div>

        <Link href="/">
          <a>
            <div className="logo">
              <h1>HABA</h1>
            </div>
          </a>
        </Link>

        <div>
          <ul>
            <li>
              <img src="/svg/iconSearch.svg" />
            </li>
            <li>
              <Link href="/like">
                <a>
                  <img src="/svg/like.svg" />
                </a>
              </Link>
            </li>
            <li>
              <Link href="/connection">
                <a>
                  <img src="/svg/iconUserProfil.svg" />
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>
                  <img src="/svg/sale.svg" />
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <style jsx>{`
        nav {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          justify-items: center;
          align-items: center;
          text-decoration: none;
          text-transform: uppercase;
        }
        nav ul {
          list-style: none;
          display: flex;
        }
        .products:nth-child(1) li {
          position: relative;
          font-weight: 500;
          letter-spacing: 0.05rem;
        }
        .products:nth-child(1) li > ul:nth-child(1) {
          padding: 2rem;
          position: absolute;
        }
        .products:nth-child(1) li > ul:nth-child(1) li {
          visibility: hidden;
        }

        div:nth-child(1) > ul:nth-child(1) li:hover > ul:nth-child(1) li {
          visibility: visible;
        }
        .products {
          position: relative;
          transition: 0.5s;
          transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
        }
        .products:nth-child(1) > li::before {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 1rem;
          z-index: -1;
          opacity: 0.8;
          background: #f7c289;
          transform: scale3d(0, 1, 1);
          transform-origin: 0% 50%;
          transition: transform 0.5s;
          transition-timing-function: cubic-bezier(0.1, 1, 0.3, 1);
        }
        /* Hover */
        .products li:hover::before,
        .products li:focus::before {
          transform: scale3d(1, 1, 1);
        }
        nav ul > li {
          padding: 0 0.5rem 0.5rem 0.5rem;
        }
        img {
          width: 2rem;
        }
        .logo img {
          width: 100%;
        }
        @media (max-width: 730px) {
          nav {
            grid-template-rows: repeat(2, minmax(0, 1fr));
          }
          nav > h2 {
            margin-left: 0.5em;
            font-size: 1.5em;
          }
        }
        @media (max-width: 600px) {
          nav {
            display: block;
          }
          nav > .title {
            padding-left: 1.5rem;
          }
          nav > .ul > ul {
            margin: 2rem 0 2rem;
            display: inline-flex;
            padding: 0;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
