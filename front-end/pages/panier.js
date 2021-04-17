import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import ProductList from "../components/ProductList";
import { useStore } from "../lib/store";

const CartPage = () => {
  const products = useStore((state) => (state.cart ? state.cart.produits : []));

  return (
    <Layout>
      <ProductList products={products} />
    </Layout>
  );
};
export default CartPage;
