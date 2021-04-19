import Link from "next/link";
import OneColumn from "../components/OneColumn";
import { useStore } from "../lib/store";

const CartProduct = ({ products, productId }) => {
  const removeProductFromCart = useStore(
    (state) => state.removeProductFromCart
  );

  return (
    <OneColumn>
      <h2>Panier</h2>
      {products.map((product) => (
        <div className="one-product">
          <Link href={"/produit/" + product.slug}>
            <a>
              {product.images.length && (
                <img
                  src={
                    process.env.NEXT_PUBLIC_BACKOFFICE_HOST +
                    product.images[0].formats.small.url
                  }
                />
              )}
            </a>
          </Link>
          <div className="label">
            <span>{product.label}</span>
            <span>{product.prix}€</span>
            <span onClick={() => removeProductFromCart(product.id)}>
              Supprimer
            </span>
          </div>

          <div className="quantity">
            <span>{product.quantity}</span>
          </div>
          <div className="price">
            <span>{product.prix}</span>
          </div>
          <style jsx>{`
            .one-product {
              display: grid;
              grid-template-columns: auto auto auto auto;
              align-self: center;
              justify-items: center;
              gap: 2rem;
            }

            .label {
              display: flex;
              flex-direction: column;
              gap: 0.5rem;
            }
            img {
              max-width: 20rem;
              width: 100%;
            }
            .price {
              font-weight: 700;
            }

            @media (max-width: 500px) {
              .one-product {
                grid-template-columns: auto;
              }
            }
          `}</style>
        </div>
      ))}
    </OneColumn>
  );
};

export default CartProduct;
