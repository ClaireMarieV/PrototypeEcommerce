export default async (req, res) => {
  if (req.method === "POST") {
    const {
      query: { productId },
    } = req;
    //passage du token a strapi pour verifier si authentification
    return fetch(
      process.env.NEXT_PUBLIC_BACKOFFICE_HOST +
        "/paniers/produits/" +
        productId,
      {
        method: "POST",
        headers: { Authorization: `Bearer ${req.cookies.token}` },
      }
    )
      .then((response) => response.json())
      .then((cart) => {
        res.status(200).json(cart);
      })
      .catch((error) => {
        console.error(error);
        res.status(401).end();
      });
  } else if (req.method === "DELETE") {
    const {
      query: { productId },
    } = req;
    //passage du token a strapi pour verifier si authentification
    return fetch(
      process.env.NEXT_PUBLIC_BACKOFFICE_HOST +
        "/paniers/produits/" +
        productId,
      {
        method: "DELETE",
        headers: { Authorization: `Bearer ${req.cookies.token}` },
      }
    )
      .then((response) => response.json())
      .then((cart) => {
        res.status(200).json(cart);
      })
      .catch((error) => {
        console.error(error);
        res.status(401).end();
      });
  } else {
    res.status(405).end();
  }
};
