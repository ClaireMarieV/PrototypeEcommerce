import Link from "next/link";
import FourColumns from "../components/FourColumns";
import ShopButton from "../components/ShopButton";
import Image from "next/image";
import sub from "date-fns/sub";

const ProductList = ({ products }) => {
  const oneWeekAgo = sub(new Date(), {
    days: 7,
  });
  return (
    <FourColumns>
      {products.map((product) => (
        <Link key={product.id} href={"/produit/" + product.slug}>
          <a>
            {product.images.length && product.images[0] && (
              <Image
                src={process.env.NEXT_PUBLIC_IMAGE_HOST + product.images[0].url}
                alt={product.label}
                width={450}
                height={600}
              />
            )}
            <div className="info">
              {new Date(product.published_at) > oneWeekAgo && (
                <span className="new-products">new</span>
              )}

              <span>{product.label}</span>
            </div>
          </a>
        </Link>
      ))}
      <style jsx>{`
        a {
          display: flex;
          flex-direction: column;
          width: 100%;
          gap: 1rem;
        }
        .info {
          display: flex;
          flex-direction: column;
          padding: 0.5rem 0 0.5rem 0;
          align-items: baseline;
          gap: 0.5rem;
        }
        .info > span:last-child {
          font-weight: 600;
        }
        img {
          width: 100%;
          max-width: 22.22rem;
          max-height: 29.99rem;
          flex-grow: 1;
        }
        .new-products {
          font-weight: 600;
          text-transform: uppercase;
          font-size: smaller;
        }
      `}</style>
    </FourColumns>
  );
};
export default ProductList;
