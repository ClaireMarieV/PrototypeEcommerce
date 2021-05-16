export default async (req, res) => {
  if (req.method === "GET") {
    return fetch(process.env.BACKOFFICE_HOST + "/custom-index")
      .then((response) => response.json())
      .then((rows) => {
        res.statusCode = 200;
        res.end(JSON.stringify(rows));
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
