import { useStore } from "../lib/store";

const ShopButton = ({ product }) => {
  const addProductToCart = useStore((state) => state.addProductToCart);

  return (
    <div>
      <button className="shop-button" onClick={() => addProductToCart(product)}>
        Ajouter au panier
      </button>
      <style jsx>{`
        button {
          display: flex;
          justify-content: center;
          background: black;
          font-weight: 600;
          color: white;
          width: 100%;
        }
      `}</style>
    </div>
  );
};
export default ShopButton;
