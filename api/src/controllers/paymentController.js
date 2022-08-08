const Stripe = require("stripe");
const stripe = new Stripe(
  "sk_test_51LTBDuKIottmlf7XdnmMDguYreyugdwIejADALbMEEuEpsSSleHhwzyclxnWuRDaLNVr4GEsHOOOTmAMFbIWxQKz00bVeDYFn4"
);

const { Cart } = require("../db");
const postPayment = async (
  id,
  amount,
  card,
  idCart,
  idUser,
  userFullName,
  userMail,
  description
) => {
  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "ars",
      description: description.toString(),
      payment_method: id,
      confirm: true,
      //confirm the payment at the same time
    });

    return payment;
  } catch (error) {
    return { error: error };
  }
};

module.exports = { postPayment };
