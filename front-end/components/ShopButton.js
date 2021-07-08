import { useStore } from "../lib/store";
import { useState } from "react";
const ShopButton = ({ product }) => {
  const [bubbleClasses, setBubbleClasses] = useState(["shop-button"]);

  const addProductToCart = useStore((state) => state.addProductToCart);

  const animateButton = (e) => {
    setBubbleClasses(["shop-button", "animate"]);
    setTimeout(() => {
      setBubbleClasses(["shop-button"]);
    }, 700);
  };

  return (
    <div>
      <button
        className={bubbleClasses.join(" ")}
        onClick={() => {
          animateButton();
          addProductToCart(product);
        }}
      >
        Ajouter au panier
      </button>
      <style jsx>{`
        .shop-button {
          background-color: #242424;
          transition: transform ease-in-out 0.2s;
          color: white;
          position: relative;
        }
        .shop-button:focus {
          outline: 0;
        }
        .shop-button:before,
        .shop-button:after {
          position: absolute;
          content: "";
          display: block;
          height: 100%;
          width: 80%;
          z-index: 1;
          transition: all ease-in-out 0.2s;
          background-repeat: no-repeat;
        }
        .shop-button:before {
          display: none;
          top: -70%;
          background-image: radial-gradient(circle, #242424 20%, transparent 5%),
            radial-gradient(
              circle,
              transparent 20%,
              #242424 20%,
              transparent 5%
            ),
            radial-gradient(circle, #242424, transparent 5%),
            radial-gradient(circle, #242424, transparent 5%),
            radial-gradient(circle, #242424, transparent 5%),
            radial-gradient(circle, #242424 20%, transparent 5%),
            radial-gradient(circle, #242424 20%, transparent 5%),
            radial-gradient(circle, #242424 20%, transparent 5%),
            radial-gradient(circle, #242424 20%, transparent 5%);
          background-size: 10% 10%, 20% 20%, 15% 15%, 20% 20%, 18% 18%, 10% 10%,
            15% 15%, 10% 10%, 18% 18%;
        }

        .shop-button:after {
          display: none;
          bottom: -70%;
          background-image: radial-gradient(circle, #242424, transparent 5%),
            radial-gradient(circle, #242424 20%, transparent 5%),
            radial-gradient(circle, #242424 20%, transparent 5%),
            radial-gradient(circle, #242424 20%, transparent 5%),
            radial-gradient(circle, #242424 20%, transparent 5%),
            radial-gradient(circle, #242424 20%, transparent 5%),
            radial-gradient(circle, #242424 20%, transparent 5%);
          background-size: 15% 15%, 20% 20%, 18% 18%, 20% 20%, 15% 15%, 10% 10%,
            20% 20%;
        }
        .shop-button:active {
          transform: scale(0.9);
        }
        .shop-button.animate:before {
          display: block;
          animation: topBubbles ease-in-out 0.75s forwards;
        }
        .shop-button.animate:after {
          display: block;
          animation: bottomBubbles ease-in-out 0.75s forwards;
        }
        @keyframes topBubbles {
          0% {
            background-position: 5% 90%, 10% 90%, 10% 90%, 15% 90%, 25% 90%,
              25% 90%, 40% 90%, 55% 90%, 70% 90%;
          }
          50% {
            background-position: 0% 80%, 0% 20%, 10% 40%, 20% 0%, 30% 30%,
              22% 50%, 50% 50%, 65% 20%, 90% 30%;
          }
          100% {
            background-position: 0% 70%, 0% 10%, 10% 30%, 20% -10%, 30% 20%,
              22% 40%, 50% 40%, 65% 10%, 90% 20%;
            background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
          }
        }

        @keyframes bottomBubbles {
          0% {
            background-position: 10% -10%, 30% 10%, 55% -10%, 70% -10%, 85% -10%,
              70% -10%, 70% 0%;
          }
          50% {
            background-position: 0% 80%, 20% 80%, 45% 60%, 60% 100%, 75% 70%,
              95% 60%, 105% 0%;
          }
          100% {
            background-position: 0% 90%, 20% 90%, 45% 70%, 60% 110%, 75% 80%,
              95% 70%, 110% 10%;
            background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
          }
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
