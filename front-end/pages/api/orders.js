export default (req, res) => {
  if (req.method === "POST") {
    return fetch(`${process.env.BACKOFFICE_HOST}/orders`, {
      headers: { Authorization: `Bearer ${req.cookies.token}` },
      method: "post",
    })
      .then((res) => res.json())
      .then((response) => res.end(JSON.stringify(response)))
      .catch((error) => {
        res.statusCode = 500;
        res.end();
        console.error(error);
      });
  } else {
    res.statusCode = 401;
    res.end();
  }
};
