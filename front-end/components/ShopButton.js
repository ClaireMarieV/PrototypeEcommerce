import { useStore } from "../lib/store";

const ShopButton = ({ product }) => {
  const addProductToCart = useStore((state) => state.addProductToCart);

  return (
    <div className="shop-button">
      <button onClick={() => addProductToCart(product)}>
        Ajouter au panier
      </button>
      <style jsx>{`
        .shop-button {
          display: flex;
          justify-content: flex-start;
        }
        @media (max-width: 600px) {
          .shop-button {
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
};
export default ShopButton;
