import Layout from "../components/Layout";
import { useState, useEffect } from "react";
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
import {
  ImageProduct3,
  ImageProduct4,
  ImageProduct6,
  ImageProduct9,
  ImageProduct12,
} from "../components/gridIndex/ImageProduct";

const IndexPage = () => {
  const [structure, setStructure] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch("/api/structure-index")
      .then((response) => response.json())
      .then((structure) => {
        setStructure(structure);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return (
    <Layout>
      <HorizontalFocus>
        {structure &&
          structure.flatMap((row) =>
            row.elements.map((element) => {
              switch (
                `${element.type}${row.columnCount}${element.columnSpan}`
              ) {
                case "text31":
                  return <Text4 text={element.text} />;
                case "text32":
                  return <Text8 text={element.text} />;
                case "text33":
                case "text44":
                  return <Text12 text={element.text} />;
                case "text41":
                  return <Text3 text={element.text} />;
                case "text42":
                  return <Text6 text={element.text} />;
                case "text43":
                  return <Text9 text={element.text} />;
              }
            })
          )}
      </HorizontalFocus>
      <style jsx>{``}</style>
    </Layout>
  );
};
export default IndexPage;
