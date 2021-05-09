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
  return (
    <OneColumn>
      <h2>Panier ({products.length})</h2>
      {aggregatedProducts.map((product) => (
        <div className="one-product">
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
            <span>{product.prix * product.quantity}</span>
          </div>
          <style jsx>{`
            .one-product {
              display: grid;
              grid-template-columns: auto auto auto auto;
              align-self: center;
              justify-items: center;
              gap: 8rem;
            }
            img {
              object-fit: contain;
            }

            .label {
              display: flex;
              flex-direction: column;
              gap: 0.5rem;
            }
            img {
              max-height: 20rem;
              width: 100%;
              max-width: 20rem;
              height: 100%;
              object-fit: cover;
            }
            .quantity {
              display: flex;
              justify-content: center;
              border: 1px solid grey;
              height: 1rem;
              width: 1em;
              padding: 1rem;
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
