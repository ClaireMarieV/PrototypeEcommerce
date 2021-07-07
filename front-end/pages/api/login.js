export default (req, res) => {
  const body = JSON.parse(req.body);
  const customers = {
    identifier: body.email,
    password: body.password,
  };

  if (customers) {
    return fetch(`${process.env.NEXT_PUBLIC_BACKOFFICE_HOST}/auth/local`, {
      method: "POST",
      body: JSON.stringify(customers),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) =>
        res
          .json()
          .then((response) => (res.ok ? response : Promise.reject(response)))
      )
      .then((response) => res.end(JSON.stringify(response)))
      .catch((error) => {
        res.statusCode = 500;
        res.end();
        console.error(JSON.stringify(error, null, 2));
      });
  } else {
    res.statusCode = 401;
    res.end();
  }
};
