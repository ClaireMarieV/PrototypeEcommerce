export default async (req, res) => {
  if (req.method === "GET") {
    const {
      query: { search },
    } = req;
    return fetch(
      process.env.NEXT_PUBLIC_BACKOFFICE_HOST + "/produits?_q=" + search
    )
      .then((response) => response.json())
      .then((produit) => {
        res.statusCode = 200;
        res.end(JSON.stringify(produit));
      })
      .catch((error) => {
        console.error(error);
        res.statusCode = 500;
        res.end();
      });
  } else {
    res.statusCode = 405;
    res.end();
  }
};
