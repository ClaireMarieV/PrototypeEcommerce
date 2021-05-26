import { useStore } from "../lib/store";

const ShopButton = ({ product }) => {
  const addProductToCart = useStore((state) => state.addProductToCart);

  return (
    <div>
      <button className="shop-button" onClick={() => addProductToCart(product)}>
        Ajouter au panier
      </button>
      <style jsx>{`
        .shop-button {
          display: flex;
          justify-content: flex-start;
        }
      `}</style>
    </div>
  );
};
export default ShopButton;
