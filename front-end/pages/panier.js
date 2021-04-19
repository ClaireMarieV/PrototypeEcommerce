import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import CartProduct from "../components/CartProduct";
import OneColumn from "../components/OneColumn";
import { useStore } from "../lib/store";

const CartPage = () => {
  const products = useStore((state) => (state.cart ? state.cart.produits : []));

  return (
    <Layout>
      <CartProduct products={products} />
      <div className="checkout">
        <span>Total:</span>
        <button>checkout</button>
      </div>

      <style jsx>{`
        .checkout {
          margin: auto;
          width: 30%;
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </Layout>
  );
};
export default CartPage;
