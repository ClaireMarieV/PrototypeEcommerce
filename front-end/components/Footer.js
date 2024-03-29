import React from "react";
import Link from "next/link";

const Footer = () => (
  <footer>
    <div>
      <Link href="/">
        <a>
          <h1>HABAAH</h1>
        </a>
      </Link>
    </div>
    <section>
      <div>
        <span>Entreprise</span>
        <ul>
          <li>
            <Link href="/about">
              <a>
                <span>Contact</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/mentions">
              <a>
                <span>Mentions légales</span>
              </a>
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <span>Nous suivre</span>
        <ul>
          <li>
            <Link href="/about">
              <a>
                <span>Facebook</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>
                <span>Instagram</span>
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </section>
    <style jsx>{`
      footer {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        justify-tems: center;
        text-decoration: none;
        margin-top: 2rem 0 0 0;
        padding: 1.5rem;
      }
      ul {
        gap: 1rem;
        list-style: none;
      }

      div > span {
        padding: 0;
        font-weight: 600;
      }
      img {
        width: 1.5rem;
      }
      .logo img {
        width: 100%;
      }
      section {
        display: flex;
        justify-content: space-around;
        gap: 2rem;
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
        footer {
          grid-template-columns: auto;
          justify-items: center;
          text-decoration: none;
          margin-top: 2rem 0 0 0;
          padding: 1.5rem;
          gap: 3rem;
        }
        nav {
          display: block;
        }
        nav > .title {
          padding-left: 1.5rem;
        }
        nav > ul {
          margin: 2rem 0 2rem;
          display: inline-flex;
          padding: 0;
        }
      }
    `}</style>
  </footer>
);

export default Footer;
