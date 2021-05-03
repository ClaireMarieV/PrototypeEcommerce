import React from "react";
import Header from "./header";
import Head from "next/head";
import Footer from "./Footer";
const Layout = ({ children }) => (
  <div className="layout">
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#5bbad5"
      />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
    <Header />
    <link rel="stylesheet" href="https://use.typekit.net/ljf5get.css" />
    <div
      style={{
        margin: `0 auto`,
      }}
    >
      <main>{children}</main>
    </div>
    <Footer />
    <style jsx global>
      {`
        html {
          overflow: auto;
          height: 100%;
        }
        main {
          perspective: 2px;
          width: 90vw;
          margin: 0 auto;
        }
        html,
        body {
          margin: 0;
          padding: 0;
          border: 0;
          color: #1c1b1b;
        }
        body {
          font-family: p22-underground, sans-serif;
          letter-spacing: 0.05rem;
          margin: 0;
          overflow-x: hidden;
          overflow-y: auto;
          perspective: 1px;
          background-color: #f6f5f9;
          font-size: 1rem;
        }
        ::-webkit-scrollbar {
          scrollbar-width: 5px;
        }
        /* Track */
        ::-webkit-scrollbar-track {
        }
        /* Handle */
        ::-webkit-scrollbar-thumb {
          background: rgba(79, 71, 78, 0.8);
        }
        header {
          margin-top: 1rem;
        }
        a {
          letter-spacing: 0.25em;
          text-decoration: none;
          color: #1c1b1b;
        }
        h1 {
          font-size: 3rem;
          letter-spacing: 1rem;
          margin: 0;
        }

        h2 {
          font-weight: 500;
        }
        h3 {
          margin: 0;
        }
        h4 {
          margin: 0.5em;
          font-family: astoria-sans-condensed, sans-serif;
          font-weight: 100;
          font-size: 1.2rem;
          margin-bottom: 0.5em;
        }
        p {
          padding: 2em;
          text-align: justify;
        }
        span {
          // padding: 1rem;
        }
        ul {
          padding: 0;
        }
        img {
          object-fit: cover;
          overflow: hidden;
        }
        button {
          border: none;
          padding: 1rem;
          background: #1c1b1b;
          color: white;
          text-transform: uppercase;
          font-weight: 600;
          letter-spacing: 0.05rem;
        }
        label {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        input {
          border: none;
          border-bottom: 1.5px solid;
          margin-top: 0.5rem;
          background-color: #f6f5f9;
        }
        input[type="email"],
        input[type="password"] {
          background: transparent;
        }
      `}
    </style>
  </div>
);

export default Layout;
