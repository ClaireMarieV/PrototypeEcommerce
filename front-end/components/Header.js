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
          <ul>
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
        div:nth-child(1) > ul:nth-child(1) li {
          position: relative;
          font-weight: 500;
          letter-spacing: 0.05rem;
        }
        div:nth-child(1) > ul:nth-child(1) li > ul:nth-child(1) {
          padding: 2rem;
          position: absolute;
        }
        div:nth-child(1) > ul:nth-child(1) li > ul:nth-child(1) li {
          visibility: hidden;
        }

        div:nth-child(1):hover > ul:nth-child(1) li > ul:nth-child(1) li {
          visibility: visible;
        }
        nav ul > li {
          padding: 0 0.5rem 0.5rem 1rem;
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
