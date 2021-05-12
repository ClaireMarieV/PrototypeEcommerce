import Layout from "../components/Layout";
import HorizontalFocus from "../components/HorizontalFocus";
import {
  Text3,
  Text4,
  Text6,
  Text9,
  Text12,
} from "../components/gridIndex/Text";
import {
  Image3,
  Image4,
  Image6,
  Image9,
  Image12,
} from "../components/gridIndex/Image";
import {
  Category3,
  Category4,
  Category6,
  Category9,
  Category12,
} from "../components/gridIndex/Category";
import {
  Product3,
  Product4,
  Product6,
  Product9,
  Product12,
} from "../components/gridIndex/Product";

const IndexPage = () => (
  <Layout>
    <HorizontalFocus>
      <Text12 text="New collection" />
      <Image12 src="/svg/horizontalBauhaus.svg" />
      <Category3 category={{ name: "Robe" }} />
      <Product6 product={{ name: "Dr.Martens" }} />
    </HorizontalFocus>
    <style jsx>{``}</style>
  </Layout>
);
export default IndexPage;
