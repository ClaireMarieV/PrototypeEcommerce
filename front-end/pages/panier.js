import React, { useState, useEffect } from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import CartProduct from "../components/CartProduct";
import OneColumn from "../components/OneColumn";
import TwoColumns from "../components/TwoColumns";
import { useStore } from "../lib/store";

const CartPage = () => {
  const products = useStore((state) => (state.cart ? state.cart.products : []));
  const total =
    Math.round(products.reduce((acc, product) => product.prix + acc, 0) * 100) /
    100;
  return (
    <Layout>
      <OneColumn>
        <h2>Resumé de la commande ({products.length})</h2>
        <TwoColumns>
          {products.length >= 1 && <CartProduct products={products} />}
          {products.length === 0 && <span>Votre panier est vide.</span>}
          <section className="checkout">
            <div className="title-resume">
              <h2>Resumé de la commande</h2>
              <span>({products.length} articles)</span>
            </div>
            <div className="order-resume">
              <span>Total des articles: {total}€</span>
              <span>Taxes comprises</span>
              <span className="total">TOTAL: {total}€</span>
            </div>
            <div className="link-delivery">
              <Link href="/livraison">
                <a>
                  <button>Traiter la commande</button>
                </a>
              </Link>
            </div>
          </section>
        </TwoColumns>
      </OneColumn>
      <style jsx>{`
        .checkout {
          display: flex;
          flex-direction: column;
          align-items: baseline;
          gap: 2rem;
        }
        .empty {
          display: flex;
          justify-content: center;
          align-content: center;
          margin: auto;
          padding: 5rem;
        }
        .empty > span {
          font-weight: 600;
          font-size: 1.5rem;
        }
        .order-resume {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .title-resume {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }
        .total {
          font-weight: 600;
        }
        @media (max-width: 1000px) {
          .title-resume {
            align-items: baseline;
          }
        }
      `}</style>
    </Layout>
  );
};
export default CartPage;
