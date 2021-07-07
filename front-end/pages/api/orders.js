export default (req, res) => {
  const body = JSON.parse(req.body);
  const customers = {
    lastname: body.lastname,
    firstname: body.firstname,
    email: body.email,
    address: body.address,
    postal: body.postal,
    town: body.town,
    products: body.products,
    clickAndCollect: body.clickAndCollect,
  };
  if (req.method === "POST") {
    return fetch(`${process.env.NEXT_PUBLIC_BACKOFFICE_HOST}/orders`, {
      method: "POST",
      body: JSON.stringify(customers),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${req.cookies.token}`,
      },
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
