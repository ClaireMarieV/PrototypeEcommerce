import Link from "next/link";
import OneColumn from "../components/OneColumn";

const ProductList = ({ products }) => (
  <OneColumn>
    <h2>Panier</h2>
    {products.map((product) => (
      <Link href={"/produit/" + product.slug}>
        <a>
          <div className="one-product">
            {product.images.length && (
              <img
                src={
                  process.env.NEXT_PUBLIC_BACKOFFICE_HOST +
                  product.images[0].formats.small.url
                }
              />
            )}
            <div>
              <span>{product.label}</span>
            </div>
            <div className="price">
              <span>{product.prix}</span>
            </div>
          </div>
          <style jsx>{`
            .one-product {
              display: grid;
              grid-template-columns: auto auto auto;
              align-self: center;
              justify-items: center;
              gap: 2rem;
            }

            img {
              max-width: 20rem;
              width: 100%;
            }
            .price {
              font-weight: 700;
            }
            @media (max-width: 500px) {
              .one-product {
                grid-template-columns: auto;
              }
            }
          `}</style>
        </a>
      </Link>
    ))}
  </OneColumn>
);

export default ProductList;
