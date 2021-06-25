import { useState, useEffect } from "react";
import Link from "next/link";
import Search from "../components/Search";
import DropdownMenu from "../components/DropdownMenu";
import { useStore } from "../lib/store";
import Cookie from "js-cookie";

const Header = ({ currentPage }) => {
  const products = useStore((state) => (state.cart ? state.cart.products : []));
  const setUser = useStore((state) => state.setUser);
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const username = useStore((state) =>
    state.user ? state.user.username : null
  );
  const disconnect = () => {
    Cookie.remove("token");
    setUser(null);
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
        <Link className="logo" href="/">
          <a>
            <h1>HABAAH</h1>
          </a>
        </Link>
        <div className="listing-products">
          <ul className="products">
            <li>
              <Link href="/produits">
                <a className={currentPage === "all-products" ? "focus" : ""}>
                  PRODUITS
                </a>
              </Link>
            </li>
            <li>
              <Link href="/nouveaux-produits">
                <a className={currentPage === "new-products" ? "focus" : ""}>
                  NEW IN
                </a>
              </Link>
            </li>
          </ul>
          <Search />
        </div>
        <ul>
          <li>
            {username && (
              <DropdownMenu title={username}>
                <span onClick={disconnect}>Deconnexion</span>
              </DropdownMenu>
            )}
          </li>
          <li>
            <Link href={username ? "/profil" : "/connexion"}>
              <a>
                <img src="/svg/iconUserProfil.svg" />
              </a>
            </Link>
          </li>
          <li className="cart">
            <Link href="/panier">
              <a>
                <img src="/svg/sale.svg" />
                <span>{products.length}</span>
              </a>
            </Link>
          </li>
        </ul>
      </nav>

      <style jsx>{`
        nav {
          display: grid;
          grid-template-columns: repeat(3, auto);
          justify-items: center;
          justify-content: space-around;
          gap: 2rem;
          align-items: center;
          text-decoration: none;
          margin: 2rem;
        }
        nav ul {
          list-style: none;
          display: flex;
          align-items: center;
          justify-content: space-around;
          justify-self: center;
          gap: 2rem;
        }
        ul > li > a.focus {
          font-weight: 600;
        }

        .listing-products {
          display: inline-flex;
          gap: 2rem;
        }
        .listing-products > .products:nth-child(1) li {
          position: relative;
          font-weight: 400;
          letter-spacing: 0.05rem;
        }
        .listing-products > .products:nth-child(1) li > ul:nth-child(1) {
          margin: 2rem;
          position: absolute;
          align-items: baseline;
        }
        .listing-products > .products:nth-child(1) li > ul:nth-child(1) li {
          visibility: hidden;
        }

        div:nth-child(1) > ul:nth-child(1) li:hover > ul:nth-child(1) li {
          visibility: visible;
        }

        img {
          max-width: 100%;
          width: 2rem;
        }
        .logo img {
          width: 100%;
        }
        .cart span {
          font-weight: 500;
        }
        nav > ul:nth-child(3) > li:nth-child(2) {
          display: flex;
          align-items: baseline;
          gap: 0.5rem;
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
          .listing-products {
            display: block;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
