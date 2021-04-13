export default async (req, res) => {
  if (req.method === "GET") {
    const {
      query: { slug },
    } = req;
    return fetch(process.env.BACKOFFICE_HOST + "/categories?slug=" + slug)
      .then((response) => response.json())
      .then((categorie) => {
        res.status(200).json(categorie[0]);
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
