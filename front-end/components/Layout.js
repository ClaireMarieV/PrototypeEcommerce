import React from "react";
import Header from "./header";
import Head from "next/head";
import Footer from "./Footer";
const Layout = ({ children }) => (
  <div className="layout">
    <Head>
      <link rel="icon" href="/favicon.ico" />
    </Head>{" "}
    <Header />
    <link rel="stylesheet" href="https://use.typekit.net/nfm0nuv.css"></link>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1400,
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
        }
        html,
        body {
          margin: 0;
          padding: 0;
          border: 0;
          color: #40363e;
        }
        body {
          font-family: arboria, sans-serif;
          font-weight: 100;
          letter-spacing: 0.05rem;
          margin: 0;
          height: 100vh;
          overflow-x: hidden;
          overflow-y: auto;
          height: 100%;
          perspective: 1px;
          background-color: #fffff;
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
        img {
          overflow: hidden;
        }
        a {
          font-family: arboria, sans-serif;
          font-weight: 500;
          font-style: normal;
          letter-spacing: 0.25em;
          text-decoration: none;
          color: #40363e;
        }
        h1 {
          font-size: 3rem;
          letter-spacing: 1rem;
          margin: 0;
        }
        span,
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
          padding: 1rem;
        }
        ul {
          padding: 0;
        }
      `}
    </style>
  </div>
);

export default Layout;
