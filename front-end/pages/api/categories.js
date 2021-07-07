export default async (req, res) => {
  if (req.method === "GET") {
    return fetch(process.env.NEXT_PUBLIC_BACKOFFICE_HOST + "/categories/")
      .then((response) => response.json())
      .then((categories) => {
        res.statusCode = 200;
        res.end(JSON.stringify(categories));
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
