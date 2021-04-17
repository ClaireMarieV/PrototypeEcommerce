import { useState, useEffect } from "react";
import Link from "next/link";
import Search from "../components/Search";
import DropdownMenu from "../components/DropdownMenu";
import { useStore } from "../lib/store";
import Cookie from "js-cookie";

const Header = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const username = useStore((state) =>
    state.user ? state.user.username : null
  );
  const disconnect = () => {
    Cookie.remove("token");
    window.location = "/";
  };

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
              <DropdownMenu title="COLLECTION">
                {categories.map((category) => (
                  <Link key={category.id} href={"/categorie/" + category.slug}>
                    <a>{category.label}</a>
                  </Link>
                ))}
              </DropdownMenu>
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

        <Link className="logo" href="/">
          <a>
            <h1>HABAAH</h1>
          </a>
        </Link>

        <div>
          <ul>
            {username && (
              <li>
                <DropdownMenu title={username}>
                  <span onClick={disconnect}>Deconnexion</span>
                </DropdownMenu>
              </li>
            )}
            <li>
              <Search />
            </li>
            <li>
              <Link href={username ? "/profil" : "/connexion"}>
                <a>
                  <img src="/svg/iconUserProfil.svg" />
                </a>
              </Link>
            </li>
            <li>
              <Link href="/panier">
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
        }
        nav ul {
          list-style: none;
          display: flex;
          align-items: center;
        }
        .products:nth-child(1) li {
          position: relative;
          font-weight: 500;
          letter-spacing: 0.05rem;
        }
        .products:nth-child(1) li > ul:nth-child(1) {
          margin: 2rem;
          position: absolute;
          align-items: baseline;
        }
        .products:nth-child(1) li > ul:nth-child(1) li {
          visibility: hidden;
        }

        div:nth-child(1) > ul:nth-child(1) li:hover > ul:nth-child(1) li {
          visibility: visible;
        }

        img {
          width: 2rem;
        }
        .logo img {
          width: 100%;
        }
        @media (max-width: 1100px) {
          nav {
            grid-template-columns: auto;
            justify-items: center;
          }
          nav > h2 {
            margin-left: 0.5em;
            font-size: 1.5em;
          }
        }
        @media (max-width: 600px) {
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
