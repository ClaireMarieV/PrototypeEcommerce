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
    <div>
      <ul>
        <li>
          <Link href="/about">
            <a>
              <span>about us</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>
              <span>contact</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/aide">
            <a>
              <span>aide</span>
            </a>
          </Link>
        </li>
      </ul>
    </div>
    <style jsx>{`
      footer {
        display: flex;
        flex-direction: column;
        justify-items: center;
        align-items: center;
        text-decoration: none;
        margin-top: 2rem 0 0 0;
        padding: 1.5rem;
      }
      ul {
        display: flex;
        gap: 1rem;
        list-style: none;
      }
      li {
        padding-right: 1rem;
      }
      span {
        padding: 0;
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
