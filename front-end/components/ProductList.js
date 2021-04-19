import Link from "next/link";
import ThreeColumns from "../components/ThreeColumns";
import ShopButton from "../components/ShopButton";

const ProductList = ({ products }) => (
  <ThreeColumns>
    {products.map((product) => (
      <Link href={"/produit/" + product.slug}>
        <a>
          {product.images.length && product.images[0].formats.large && (
            <img
              src={
                process.env.NEXT_PUBLIC_BACKOFFICE_HOST +
                product.images[0].formats.large.url
              }
            />
          )}
          <div className="info">
            <span>{product.label}</span>
            <span>{product.prix}</span>
          </div>
          <ShopButton productId={product.id} />
        </a>
      </Link>
    ))}
    <style jsx>{`
      a {
        display: flex;
        flex-direction: column;

        justify-content: space-between;
        align-items: stretch;
      }
      .info {
        display: flex;
        padding: 1rem 0 1rem 0;
        justify-content: space-between;
        gap: 1rem;
      }
      img {
        width: 100%;
        object-fit: cover;
        max-height: 33.33rem;
        flex-grow: 1;
      }
    `}</style>
  </ThreeColumns>
);

export default ProductList;
