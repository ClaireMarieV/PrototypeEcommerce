import { useStore } from "../lib/store";

const ShopButton = ({ productId }) => {
  const addProductToCart = useStore((state) => state.addProductToCart);

  return (
    <div>
      <button
        className="shop-button"
        onClick={() => addProductToCart(productId)}
      >
        Ajouter au panier
      </button>
      <style jsx>{`
        button {
          display: flex;
          justify-content: center;
          border: 2px solid #40363e;
          background: transparent;
          font-weight: 600;
          color: black;
          margin: auto;
        }
      `}</style>
    </div>
  );
};
export default ShopButton;
