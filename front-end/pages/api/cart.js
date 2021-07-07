export default async (req, res) => {
  if (req.method === "GET") {
    //passage du token a strapi pour verifier si authentification
    return fetch(process.env.NEXT_PUBLIC_BACKOFFICE_HOST + "/paniers", {
      headers: { Authorization: `Bearer ${req.cookies.token}` },
    })
      .then((response) => response.json())
      .then((user) => {
        res.status(200).json(user);
      })
      .catch((error) => {
        console.error(error);
        res.status(401).end();
      });
  } else {
    res.status(405).end();
  }
};
