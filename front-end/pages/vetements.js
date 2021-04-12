import React, { useState, useEffect } from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import Container from "../components/Container";
import Picture from "../components/Picture";

const ListingPage = () => {
  // const [name, setName] = useState("");
  // const [description, setDescription] = useState("");
  // const [matter, setMatter] = useState("");
  // const [price, setPrice] = useState("");
  const [clothes, setClothes] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch("/api/clothes")
      .then((response) => response.json())
      .then((clothes) => {
        setClothes(clothes);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return (
    <Layout>
      <Container>
        {clothes
          .filter((clothe) => clothe.pictures.length)
          .map((clothe) => (
            <Link href={"/vetements/" + clothe.id}>
              <a>
                <div>{clothe.name}</div>
                <div className="img">
                  <Picture
                    picture={{
                      picture:
                        process.env.NEXT_PUBLIC_STRAPI_URL +
                        clothe.pictures[0].formats.small.url,
                    }}
                  />
                </div>
                <div>{clothe.price}</div>
              </a>
            </Link>
          ))}
      </Container>
      <style jsx>{`
        .img {
          width: 100%;
          height: 100%;
          display: flex;
        }
        a {
          justify-self: center;
        }
      `}</style>
    </Layout>
  );
};
export default ListingPage;
