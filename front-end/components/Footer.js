import React from "react";
import Link from "next/link";

const Footer = () => (
  <header>
    <div className="footer">
      <div>
        <Link href="/">
          <a>
            <h1>HABAAH</h1>
          </a>
        </Link>
      </div>
      <div>
        <ul className="ul">
          <li>
            <ul>
              <li>
                <Link href="/newsletter">
                  <a>
                    <span>newsletter</span>
                  </a>
                </Link>
              </li>

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
          </li>
        </ul>
      </div>
    </div>

    <style jsx>{`
      .footer {
        display: grid;
        justify-items: center;
        align-items: center;
        text-decoration: none;
        margin-top: 2rem 0 0 0;
        padding: 1.5rem;
      }
      .ul {
        list-style: none;
        gap: 2rem;
      }
      .ul > li > ul {
        display: flex;
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
        nav > .ul > ul {
          margin: 2rem 0 2rem;
          display: inline-flex;
          padding: 0;
        }
      }
    `}</style>
  </header>
);

export default Footer;
