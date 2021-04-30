import Link from "next/link";
import ShopButton from "../components/ShopButton";
import OneColumn from "../components/OneColumn";

const Product = ({ product }) => (
  <OneColumn>
    <div className="one-product">
      <div className="images">
        {product.images.map((image) => (
          <img
            src={
              process.env.NEXT_PUBLIC_BACKOFFICE_HOST + image.formats.small.url
            }
          />
        ))}
      </div>
      <div className="info">
        <div>
          <div className="label">
            <span>{product.label}</span>
          </div>
          <div>
            <span>REF.{product.reference}</span>
          </div>
          <div>
            <span>{product.description}</span>
          </div>
          <div className="price">
            <span>{product.prix}€</span>
          </div>
          <ShopButton product={product} />
        </div>
      </div>
      <style jsx>{`
        .one-product {
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 2rem;
          justify-items: center;
          position: relative;
        }
        .images {
          overflow: hidden;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          gap: 2rem;
        }
        .info {
          position: relative;
        }
        .info > div {
          position: fixed;
          gap: 1rem;
          display: flex;
          flex-direction: column;
        }
        .label > span,
        .price > span {
          text-transform: uppercase;
          font-weight: 600;
        }
      `}</style>
    </div>
  </OneColumn>
);

export default Product;
