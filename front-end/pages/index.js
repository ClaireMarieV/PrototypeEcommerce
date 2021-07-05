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
          <Image src="/pictures/croquis.png " width={650} height={800} />
        </section>
        <div className="category">
          <ul>
            <li>CATEGORIE</li>
            {categories
              .filter((category) => category.label === "Robe")
              .map((category) => (
                <li key={category.id}>
                  <Link href={"/categories/" + category.slug}>
                    <a>{category.label}</a>
                  </Link>
                </li>
              ))}
          </ul>
        </div>
        <div className="product">
          <ul>
            {categories
              .filter((category) => category.label === "Boots")
              .map((category) => (
                <li key={category.id}>{category.label}</li>
              ))}
            {products
              .filter((product) => product.label === "Dr Martens")
              .map((product) => (
                <li key={product.id}>
                  <Link href={"/produits/" + product.slug}>
                    <a>{product.label}</a>
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </TwelveColumns>
      <style jsx>{`
        .image {
          grid-column-start: 2;
          grid-column-end: 8;
        }
        .category {
          grid-column-start: 9;
          grid-column-end: 12;
          justify-self: center;
          align-self: center;
          width: 100%;
          display: flex;
          justify-content: center;
        }
        .product {
          grid-row-start: 2;
          grid-column-start: 3;
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
          font-size: 1.5rem;
        }
        .category > ul > li:nth-child(2),
        .product > ul > li:nth-child(2) {
          font-size: 2rem;
          text-transform: uppercase;
        }
      `}</style>
    </Layout>
  );
};
export default IndexPage;
