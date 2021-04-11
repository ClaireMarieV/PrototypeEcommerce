export default (req, res) => {
  const body = JSON.parse(req.body);
  const customers = {
    username: body.firstname + " " + body.lastname,
    email: body.email,
    password: body.password,
  };

  const request = {
    method: "POST",
    body: JSON.stringify(customers),
    headers: {
      "Content-Type": "application/json",
    },
  };
  if (customers) {
    return fetch(`${process.env.BACKOFFICE_HOST}/auth/local/register`, request)
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
