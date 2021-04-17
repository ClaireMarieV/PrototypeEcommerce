import { useStore } from "../lib/store";

const ShopButton = ({ productId }) => {
  const addProductToCart = useStore((state) => state.addProductToCart);

  return (
    <div className="shop-button" onClick={() => addProductToCart(productId)}>
      <span>shop now</span>
      <style jsx>{`
        .shop-button {
          display: flex;
          justify-content: center;
        }
        span {
          text-transform: uppercase;
          background: transparent;
          border: 2px solid #40363e;
          padding: 0.5rem;
          font-family: astoria-sans-condensed, sans-serif;
          font-weight: 600;
        }
      `}</style>
    </div>
  );
};
export default ShopButton;
