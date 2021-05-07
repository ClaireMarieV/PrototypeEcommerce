import Link from "next/link";
import ShopButton from "../components/ShopButton";
import Flex from "../components/Flex";
import Image from "next/image";

const Product = ({ product }) => {
  return (
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
          <h1>{product.label}</h1>
          <div className="price">
            <span>__{product.prix}€</span>
          </div>
        </div>
        <span>REF.{product.reference}</span>

        <span>{product.description}</span>

        <ShopButton product={product} />
        <style jsx>{`
          .images {
            overflow: hidden;
            display: flex;
            flex-direction: column;
            flex-grow: 1;
            gap: 2rem;
          }
          .lable {
            display: flex;
            flex-direction: column;
          }
          .info {
            display: flex;
            flex-direction: column;
            align-self: flex-start;
            position: -webkit-sticky;
            position: sticky;
            top: 0;
            gap: 2rem;
            width: 100%;
          }
          .price > span {
            text-transform: uppercase;
            font-weight: 600;
            font-size: 1.2rem;
            color: #373737;
            letter-spacing: 0;
          }
          h1 {
            font-size: 1.5rem;
            text-transform: uppercase;
            letter-spacing: inherit;
          }
        `}</style>
      </div>
    </Flex>
  );
};

export default Product;
