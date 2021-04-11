export default async (req, res) => {
  if (req.method === "GET") {
    const {
      query: { id },
    } = req;
    return fetch(process.env.BACKOFFICE_HOST + "/categories/" + id)
      .then((response) => response.json())
      .then((categorie) => {
        res.statusCode = 200;
        res.end(JSON.stringify(categorie));
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
