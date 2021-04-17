import Link from "next/link";
import ShopButton from "../components/ShopButton";

const Product = ({ product }) => (
  <div className="one-product">
    {product.images.length && (
      <img
        src={
          process.env.NEXT_PUBLIC_BACKOFFICE_HOST +
          product.images[0].formats.small.url
        }
      />
    )}
    <div className="info">
      <div>
        <span>{product.label}</span>
      </div>
      <div>
        <span>{product.prix}</span>
      </div>
      <ShopButton productId={product.id} />
    </div>
    <style jsx>{`
      .one-product {
        display: grid;
        grid-template-columns: 1fr 1fr;
        justify-items: center;
        align-items: center;
      }
    `}</style>
  </div>
);

export default Product;
