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
import { Category3 } from "../components/gridIndex/Category";

const IndexPage = () => (
  <Layout>
    <HorizontalFocus>
      <Text12 text="New collection" />
      <Image12 src="/svg/horizontalBauhaus.svg" />
      <Category3 category={{ name: "Robe" }} />
    </HorizontalFocus>
    <style jsx>{``}</style>
  </Layout>
);
export default IndexPage;
