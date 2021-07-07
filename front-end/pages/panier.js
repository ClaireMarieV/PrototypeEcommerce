import React, { useState, useEffect } from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import CartProduct from "../components/CartProduct";
import OneColumn from "../components/OneColumn";
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
        {products.length >= 1 && (
          <>
            <CartProduct products={products} />
            <div className="checkout">
              <span>Total : {total}€</span>
              <Link href="/livraison">
                <a>
                  <button>Traiter la commande</button>
                </a>
              </Link>
            </div>
          </>
        )}
      </OneColumn>
      {products.length === 0 && (
        <div className="empty">
          <span>Votre panier est vide.</span>
        </div>
      )}
      <style jsx>{`
        .checkout {
          margin: 3rem auto;
          width: fit-content;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .checkout span {
          font-weight: 500;
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
      `}</style>
    </Layout>
  );
};
export default CartPage;
