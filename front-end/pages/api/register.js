export default (req, res) => {
  const body = JSON.parse(req.body);
  const customers = {
    username: body.firstname + " " + body.lastname,
    firstname: body.firstname,
    lastname: body.lastname,
    email: body.email,
    password: body.password,
    confirmationPassword: body.confirmationPassword,
  };

  if (customers) {
    return fetch(
      `${process.env.NEXT_PUBLIC_BACKOFFICE_HOST}/auth/local/register`,
      {
        method: "POST",
        body: JSON.stringify(customers),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
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
