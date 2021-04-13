import React from "react";
import Link from "next/link";

const Header = () => (
  <header>
    <nav>
      <div>
        <ul>
          <li>
            <Link href="/produits">
              <a>COLLECTION</a>
            </Link>
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
        margin-top: 2rem 0 0 0;
        padding: 1.5rem;
        text-transform: uppercase;
      }
      nav ul {
        list-style: none;
        display: flex;
        justify-content: space-evenly;
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

export default Header;
