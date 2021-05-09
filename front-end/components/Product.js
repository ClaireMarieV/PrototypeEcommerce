import Link from "next/link";
import { useState } from "react";
import ShopButton from "../components/ShopButton";
import Flex from "../components/Flex";
import Image from "next/image";

const Product = ({ product }) => {
  const [currentImage, setCurrentImage] = useState(product.images[0]);

  return (
    <Flex>
      <div className="images">
        <div>
          {product.images.length && (
            <Image
              src={process.env.NEXT_PUBLIC_BACKOFFICE_HOST + currentImage.url}
              width={1400}
              height={1900}
            />
          )}
        </div>
        <div className="listing-images">
          {product.images.map((image) => (
            <Image
              onClick={() => {
                setCurrentImage(image);
              }}
              src={process.env.NEXT_PUBLIC_BACKOFFICE_HOST + image.url}
              width={300}
              height={400}
            />
          ))}
        </div>
      </div>
      <div className="info">
        <div className="label">
          <h1>{product.label}</h1>
          <div className="price">
            <span>{product.prix}€</span>
          </div>
        </div>
        <span>REF.{product.reference}</span>

        <span>{product.description}</span>

        <ShopButton product={product} />
      </div>

      <style jsx>{`
        .images {
          overflow: hidden;
          display: flex;
          flex-grow: 1;
          gap: 2rem;
        }
        .listing-images {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .info {
          display: flex;
          flex-direction: column;
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
    </Flex>
  );
};

export default Product;
