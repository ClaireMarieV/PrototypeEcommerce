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

const IndexPage = () => (
  <Layout>
    <HorizontalFocus>
      <Text12 text="New collection" />
      <Image9 src="/svg/bauhaus.svg" />
    </HorizontalFocus>
    <style jsx>{``}</style>
  </Layout>
);
export default IndexPage;
