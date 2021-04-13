import Link from "next/link";
import ThreeColumns from "../components/ThreeColumns";
import Picture from "../components/Picture";
import ShopButton from "../components/ShopButton";

const ProductList = ({ products }) => (
  <ThreeColumns>
    {products.map((product) => (
      <Link href={"/produit/" + product.id}>
        <a>
          <div>
            {product.images.length && (
              <Picture
                picture={{
                  picture:
                    process.env.NEXT_PUBLIC_BACKOFFICE_HOST +
                    product.images[0].formats.small.url,
                }}
              />
            )}
            <div>
              <span>{product.label}</span>
            </div>
            <div>
              <span>{product.prix}</span>
            </div>
            <ShopButton />
          </div>
        </a>
      </Link>
    ))}
    <style jsx>{`
      a {
        justify-self: center;
      }
    `}</style>
  </ThreeColumns>
);

export default ProductList;
