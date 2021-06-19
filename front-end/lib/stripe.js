import stripeClient from "stripe";
const stripe = stripeClient(process.env.STRIPE_SECRET_KEY);

const createSession = (host, products) => {
  const aggregatedProducts = products.reduce((acc, product) => {
    if (!acc.some((p) => p.id === product.id)) {
      acc.push({ ...product, quantity: 0 });
    }
    const p = acc.find((p) => p.id === product.id);
    p.quantity++;
    return acc;
  }, []);

  return stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: aggregatedProducts.map((product) => ({
      price_data: {
        currency: "eur",
        product_data: {
          name: product.label,
          images: product.images.map(
            (image) => process.env.BACKOFFICE_HOST + image.formats.medium.url
          ),
        },
        unit_amount: product.prix * 100,
      },
      quantity: product.quantity,
    })),

    mode: "payment",
    success_url: `https://${host}/paiement/succes`,
    cancel_url: `https://${host}/paiement/annulation`,
  });
};
export default { createSession };
