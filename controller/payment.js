import Stripe from "stripe";
const StripeSecretKey = process.env.STRIPE_SECRET_KEY;
const stripe = new Stripe(StripeSecretKey);

export const getInfo = async (req, res) => {
  try {
    const info = {
      title: "stripe payment route",
      message: "payment route working fine",
      poweredBy: "Vercel",
      creator: "Denver",
    };
    res.status(200).json(info);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const creatPayment = async (req, res) => {
  try {
    const total = req.body.total;
    console.log("Payment Request Received for amount >>> ", total);
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: "INR",
    });

    res.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
