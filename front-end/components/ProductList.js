import Link from "next/link";
import FourColumns from "../components/FourColumns";
import ShopButton from "../components/ShopButton";
import Image from "next/image";

const ProductList = ({ products }) => (
  <FourColumns>
    {products.map((product) => (
      <Link key={product.id} href={"/produit/" + product.slug}>
        <a>
          {product.images.length && product.images[0] && (
            <Image
              src={
                process.env.NEXT_PUBLIC_BACKOFFICE_HOST + product.images[0].url
              }
              width={500}
              height={700}
            />
          )}
          <div className="info">
            <span>{product.label}</span>
            <span>{product.prix}€</span>
          </div>
        </a>
      </Link>
    ))}
    <style jsx>{`
      a {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
      }
      .info {
        display: flex;
        flex-direction: column;
        padding: 1rem 0 1rem 0;
        gap: 1rem;

        align-self: baseline;
      }
      img {
        width: 100%;
        object-fit: cover;
        max-width: 22.22rem;
        max-height: 29.99rem;
        flex-grow: 1;
      }
    `}</style>
  </FourColumns>
);

export default ProductList;
