import { useState } from "react";

import Link from "next/link";
import OneColumn from "../components/OneColumn";
import { useStore } from "../lib/store";
import Image from "next/image";

const CartProduct = ({ products }) => {
  const removeProductFromCart = useStore(
    (state) => state.removeProductFromCart
  );
  const aggregatedProducts = products.reduce((acc, product) => {
    if (!acc.some((p) => p.id === product.id)) {
      acc.push({ ...product, quantity: 0 });
    }
    const p = acc.find((p) => p.id === product.id);
    p.quantity++;
    return acc;
  }, []);
  const setItemCount = useStore((state) => state.setItemCount);

  return (
    <>
      {aggregatedProducts.map((product) => (
        <div className="one-product" key={product.id}>
          <div className="label">
            <span>{product.label}</span>
            <span onClick={() => removeProductFromCart(product.id)}>
              Supprimer
            </span>
          </div>
          <div className="product-ref">
            <Link key={product.id} href={"/produit/" + product.slug}>
              <a>
                {product.images.length && (
                  <Image
                    src={
                      process.env.NEXT_PUBLIC_BACKOFFICE_HOST +
                      product.images[0].url
                    }
                    width={250}
                    height={350}
                  />
                )}
              </a>
            </Link>
            <section>
              <div className="info-price">
                <span>Ref.{product.ref}</span>
                <span>{product.prix}€</span>
                <div className="quantity">
                  <span>Qté</span>
                  <span>{product.quantity}</span>
                </div>
                <div className="price">
                  <span>{product.prix * product.quantity}</span>
                </div>
              </div>
            </section>
          </div>
          <style jsx>{`
            .one-product {
              display: grid;
              gap: 1rem;
            }
            h2 {
              margin: 0;
            }
            section {
              width: 100%;
              display: flex;
              flex-direction: column;
              gap: 1rem;
            }
            img {
              object-fit: contain;
            }
            .product-ref {
              display: flex;
              gap: 1rem;
            }
            .label {
              display: flex;
              gap: 0.5rem;
              width: 100%;
              justify-content: space-between;
            }
            .label span:nth-child(1) {
              text-transform: uppercase;
              font-weight: 600;
            }
            img {
              max-height: 20rem;
              width: 100%;
              max-width: 20rem;
              height: 100%;
              object-fit: cover;
            }
            .info-price {
              display: flex;
              justify-content: space-between;
              gap: 1rem;
            }
            .quantity {
              display: flex;
              gap: 1rem;
            }
            .price {
              font-weight: 700;
            }

            @media (max-width: 500px) {
              .one-product {
                grid-template-columns: auto;
              }
              .info-price {
                flex-direction: column;
                gap: 1rem;
              }
            }
          `}</style>
        </div>
      ))}
    </>
  );
};

export default CartProduct;
