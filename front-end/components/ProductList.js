import Link from "next/link";
import FourColumns from "../components/FourColumns";
import ShopButton from "../components/ShopButton";
import Image from "next/image";
import sub from "date-fns/sub";

const ProductList = ({ products }) => {
  const oneMonthAgo = sub(new Date(), {
    months: 1,
  });
  return (
    <FourColumns>
      {products.map((product) => (
        <Link key={product.id} href={"/produit/" + product.slug}>
          <a>
            {product.images.length && product.images[0] && (
              <Image
                src={
                  process.env.NEXT_PUBLIC_BACKOFFICE_HOST +
                  product.images[0].url
                }
                width={650}
                height={1050}
              />
            )}
            <div className="info">
              {new Date(product.published_at) > oneMonthAgo && (
                <span className="new-products">new</span>
              )}

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
          align-items: center;
        }
        .info {
          display: flex;
          flex-direction: column;
          padding: 1rem 0 1rem 0;
          gap: 1rem;
          align-items: center;
        }
        img {
          width: 100%;
          object-fit: cover;
          max-width: 22.22rem;
          max-height: 29.99rem;
          flex-grow: 1;
        }
        .new-products {
          font-weight: 600;
          text-transform: uppercase;
        }
      `}</style>
    </FourColumns>
  );
};
export default ProductList;
