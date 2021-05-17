import Layout from "../components/Layout";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import HorizontalFocus from "../components/HorizontalFocus";
import {
  Text3,
  Text4,
  Text6,
  Text8,
  Text9,
  Text12,
} from "../components/gridIndex/Text";
import {
  Image3,
  Image4,
  Image6,
  Image8,
  Image9,
  Image12,
} from "../components/gridIndex/Image";
import {
  Category3,
  Category4,
  Category6,
  Category8,
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

const IndexPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [structure, setStructure] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);

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

  useEffect(() => {
    if (slug) {
      fetch("/api/categories/")
        .then((response) => response.json())
        .then((category) => {
          setCategory(category);
          setLoading(false);
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
        });
    }
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
                  return (
                    <Text4
                      element={element}
                      gridMultiplier={12 / row.columnCount}
                    />
                  );
                case "text32":
                  return (
                    <Text8
                      element={element}
                      gridMultiplier={12 / row.columnCount}
                    />
                  );
                case "text33":
                case "text44":
                  return (
                    <Text12
                      element={element}
                      gridMultiplier={12 / row.columnCount}
                    />
                  );
                case "text41":
                  return (
                    <Text3
                      element={element}
                      gridMultiplier={12 / row.columnCount}
                    />
                  );
                case "text42":
                  return (
                    <Text6
                      element={element}
                      gridMultiplier={12 / row.columnCount}
                    />
                  );
                case "text43":
                  return (
                    <Text9
                      element={element}
                      gridMultiplier={12 / row.columnCount}
                    />
                  );
                case "text44":
                  return (
                    <Text4
                      element={element}
                      gridMultiplier={12 / row.columnCount}
                    />
                  );
                case "image31":
                  return (
                    <Image8
                      element={element}
                      gridMultiplier={12 / row.columnCount}
                    />
                  );
                case "image32":
                  return (
                    <Image8
                      element={element}
                      gridMultiplier={12 / row.columnCount}
                    />
                  );
                case "image33":
                case "image44":
                  return (
                    <Image12
                      element={element}
                      gridMultiplier={12 / row.columnCount}
                    />
                  );
                case "image41":
                  return (
                    <Image3
                      element={element}
                      gridMultiplier={12 / row.columnCount}
                    />
                  );
                case "image42":
                  return (
                    <Image6
                      element={element}
                      gridMultiplier={12 / row.columnCount}
                    />
                  );
                case "image43":
                  return (
                    <Image9
                      element={element}
                      gridMultiplier={12 / row.columnCount}
                    />
                  );
                case "image44":
                  return (
                    <Image4
                      element={element}
                      gridMultiplier={12 / row.columnCount}
                    />
                  );
                case "category31":
                  return (
                    <Category8
                      element={element}
                      gridMultiplier={12 / row.columnCount}
                    />
                  );
                case "category32":
                  return (
                    <Category8
                      element={element}
                      gridMultiplier={12 / row.columnCount}
                    />
                  );
                case "category33":
                case "category44":
                  return (
                    <Category12
                      element={element}
                      gridMultiplier={12 / row.columnCount}
                    />
                  );
                case "category41":
                  return (
                    <Category3
                      element={element}
                      gridMultiplier={12 / row.columnCount}
                    />
                  );
                case "category42":
                  return (
                    <Category6
                      element={element}
                      gridMultiplier={12 / row.columnCount}
                    />
                  );
                case "category43":
                  return (
                    <Category9
                      element={element}
                      gridMultiplier={12 / row.columnCount}
                    />
                  );
                case "category44":
                  return (
                    <Category4
                      element={element}
                      gridMultiplier={12 / row.columnCount}
                    />
                  );
              }
            })
          )}
      </HorizontalFocus>
      <style jsx>{``}</style>
    </Layout>
  );
};
export default IndexPage;
