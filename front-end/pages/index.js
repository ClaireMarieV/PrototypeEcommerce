import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import TwelveColumns from "../components/TwelveColumns";
import Flex from "../components/Flex";
import ProductList from "../components/ProductList";
import Error from "../components/Error";
import Loading from "../components/Loading";
import Link from "next/link";
import Image from "next/image";

const IndexPage = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/categories/")
      .then((res) =>
        res.ok
          ? res.json()
          : res.json().then((result) => Promise.reject(result))
      )
      .then((categories) => {
        setCategories(categories);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetch("/api/produits/")
      .then((res) =>
        res.ok
          ? res.json()
          : res.json().then((result) => Promise.reject(result))
      )
      .then((products) => {
        setProducts(products);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return (
    <Layout>
      <TwelveColumns>
        <section className="image">
          <Image
            src="/pictures/vogueSuit.png"
            alt="croquis de mode"
            width={300}
            height={650}
          />
        </section>
        <div className="category">
          <ul>
            <li>CATEGORIE</li>
            {categories
              .filter((category) => category.label === "Robes & Jupes")
              .map((category) => (
                <li key={category.id}>
                  <Link href={"/categorie/" + category.slug}>
                    <a>{category.label}</a>
                  </Link>
                </li>
              ))}
          </ul>
        </div>
        <div className="product">
          <ul>
            {categories
              .filter((category) => category.label == "Pantalons & Tops")
              .map((category) => (
                <li key={category.id}>{category.label}</li>
              ))}
            {products
              .filter((product) => product.slug === "pantalon-de-costume")
              .map((product) => (
                <li key={product.id}>
                  <Link href={"/produit/" + product.slug}>
                    <a>{product.label}</a>
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </TwelveColumns>
      <style jsx>{`
        .image {
          display: flex;
          justify-content: center;
          grid-column-start: 2;
          grid-column-end: 6;
        }
        .category {
          grid-column-start: 7;
          grid-column-end: 13;
          align-self: center;
          width: 100%;
          display: flex;
          justify-content: center;
        }
        .product {
          grid-row-start: 2;
          grid-column-start: 2;
          grid-column-end: 9;
          display: flex;
          justify-content: center;
        }
        .category > ul,
        .product > ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          align-items: baseline;
          margin: 0;
        }
        .category > ul > li:nth-child(1),
        .product > ul > li:nth-child(1) {
          font-family: Felt-Tip-Senior, serif;
          font-size: 2.5rem;
          text-transform: uppercase;
        }
        .category > ul > li:nth-child(2),
        .product > ul > li:nth-child(2) {
          font-size: 3rem;
          text-transform: uppercase;
        }

        @media (max-width: 800px) {
          .image,
          .category,
          .product {
            grid-column-start: auto;
            grid-column-end: auto;
          }
        }

        @media (max-width: 600px) {
          .category > ul > li:nth-child(2),
          .product > ul > li:nth-child(2) {
            font-size: 2rem;
          }
        }
        @media (max-width: 500px) {
          .category {
            justify-content: initial;
          }
        }
      `}</style>
    </Layout>
  );
};
export default IndexPage;
