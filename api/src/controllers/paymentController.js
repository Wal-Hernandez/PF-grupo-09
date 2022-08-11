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

const updateCartPayment = async (
  id,
 ) => {
   try {
     if (!id) return "All fields are required";
     
     const cartUpdate = await Cart.update(
       {
         statusCartId:2
       },
       { where: { id: id } }
     );
     if (cartUpdate[0]) {
       return { msg: "The cart has been update successfully", valor: true };
     }
     return { msg: "Id cart not found" };
   } catch (error) {
     return {
       msg: "Error updateCartById(cartController.js)",
       error: error,
     };
   }
 };



module.exports = { postPayment , updateCartPayment};
