import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import CartProduct from "../components/CartProduct";
import OneColumn from "../components/OneColumn";
import { useStore } from "../lib/store";

const CartPage = () => {
  const products = useStore((state) => (state.cart ? state.cart.produits : []));

  return (
    <Layout>
      <OneColumn>
        <CartProduct products={products} />
      </OneColumn>
    </Layout>
  );
};
export default CartPage;
