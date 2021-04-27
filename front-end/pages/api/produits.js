export default async (req, res) => {
  // res.statusCode = 500;
  // res.end();
  if (req.method === "GET") {
    return fetch(process.env.BACKOFFICE_HOST + "/produits/")
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
