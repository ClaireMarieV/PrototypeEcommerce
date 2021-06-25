import stripe from "../../../lib/stripe";

export default async (req, res) => {
  const session = await stripe.createSession(req.headers.host, req.body);

  res.status(200).json(session);
};
