import stripe from "../../../lib/stripe";
const products = [
  {
    id: 1,
    label: "bouquet",
    price: 50,
    images: [
      {
        formats: {
          medium: {
            url:
              "https://grandajacciobaleone.com/wp-content/uploads/2019/02/logo-zara.jpg",
          },
        },
      },
    ],
  },
  {
    id: 1,
    label: "bouquet",
    price: 50,
    images: [
      {
        formats: {
          medium: {
            url:
              "https://grandajacciobaleone.com/wp-content/uploads/2019/02/logo-zara.jpg",
          },
        },
      },
    ],
  },
];

export default async (req, res) => {
  console.log(req.body);
  const session = await stripe.createSession(req.headers.host, req.body);

  res.status(200).json(session);
};
