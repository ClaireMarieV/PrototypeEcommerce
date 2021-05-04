import Link from "next/link";
import ShopButton from "../components/ShopButton";
import Flex from "../components/Flex";
import Image from "next/image";

const Product = ({ product }) => (
  <Flex>
    <div className="images">
      {product.images.map((image) => (
        <Image
          src={process.env.NEXT_PUBLIC_BACKOFFICE_HOST + image.url}
          width={500}
          height={700}
        />
      ))}
    </div>
    <div className="info">
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
    <style jsx>{`
      .one-product {
        display: flex;
        gap: 2rem;
        justify-items: center;
        position: relative;
        margin: auto;
      }
      .images {
        overflow: hidden;
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        gap: 2rem;
      }

      .info {
        position: -webkit-sticky;
        position: sticky;
        top: 10px;
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
  </Flex>
);

export default Product;
