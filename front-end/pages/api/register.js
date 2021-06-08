export default (req, res) => {
  const body = JSON.parse(req.body);
  const customers = {
    firstname: body.firstname,
    lastname: body.lastname,
    email: body.email,
    password: body.password,
    postal: body.postal,
    address: body.address,
    town: body.town,
    number: body.number,
  };

  if (customers) {
    return fetch(`${process.env.BACKOFFICE_HOST}/auth/local/register`, {
      method: "POST",
      body: JSON.stringify(customers),
      headers: {
        "Content-Type": "application/json",
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
