import React from "react";
import Header from "./Header";
import Head from "next/head";
import Footer from "./Footer";
const Layout = ({ children, currentPage }) => (
  <div className="layout">
    <Head
      htmlAttributes={{
        lang: "fr",
      }}
    >
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
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#5bbad5"
      />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
      <script src="https://js.stripe.com/v3/" crossOrigin="true"></script>
      <title>Habaah</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Habaah" />
    </Head>
    <Header currentPage={currentPage} />
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
          width: 90vw;
          margin: 6rem auto 6rem auto;
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
          font-weight: 400;
          font-style: normal;
          letter-spacing: 0.05rem;
          margin: 0;
          overflow-x: hidden;
          overflow-y: auto;
          background-color: #faf2eb;
          font-size: 1rem;
          letter-spacing: 0.2rem;
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

        a {
          text-decoration: none;
          color: #1c1b1b;
        }
        h1 {
          font-size: 3rem;
          margin: 0;
          font-family: p22-underground, sans-serif;
          font-weight: 600;
          font-style: normal;
        }
        @media (max-width: 600px) {
          h1 {
            font-size: 1.5rem;
          }
        }
        h2 {
          font-weight: 500;
          font-family: p22-underground, sans-serif;
          margin: 0;
        }
        h3 {
          margin: 0;
          font-family: p22-underground, sans-serif;
          font-weight: 600;
          font-style: normal;
        }
        h4 {
          margin: 0.5em;
          font-family: p22-underground, sans-serif;
          font-weight: 100;
          font-size: 1.2rem;
          margin-bottom: 0.5em;
        }
        h5 {
          font-family: p22-underground, sans-serif;
          font-weight: 600;
          font-style: normal;
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
          width: 100%;
        }
        button {
          border: none;
          padding: 1rem 3rem;
          width: fit-content;
          background: rgb(36, 36, 36);
          color: white;
          text-transform: uppercase;
          font-weight: 600;
          letter-spacing: 0.2rem;
          font-family: p22-underground, sans-serif;
          font-weight: 400;
          font-style: normal;
        }
        label {
          display: flex;
          flex-direction: column;
        }
        input {
          border: none;
          border-bottom: 1.5px solid;
          margin-top: 0.5rem;
          padding: 1rem;
          background-color: #f9f1ea;
          font-size: 1rem;
          color: #141414;
          letter-spacing: 0.1rem;
        }
        input[type="email"],
        input[type="password"] {
          background: transparent;
        }
        input[type="number"]::-webkit-inner-spin-button,
        input[type="number"]::-webkit-outer-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
      `}
    </style>
  </div>
);

export default Layout;
