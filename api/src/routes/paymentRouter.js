const { Router } = require("express");
const router = Router();
const { postPayment } = require("../controllers/paymentController");

router.post("/", async (req, res) => {
  const {
    id,
    amount,
    card,
    idCart,
    idUser,
    userFullName,
    userMail,
    description,
  } = req.body;
  try {
    const payment = await postPayment(
      id,
      amount,
      card,
      idCart,
      idUser,
      userFullName,
      userMail,
      description
    );
    console.log("acaa", payment);

    return res.status(200).json(payment);
  } catch (error) {
    return error;
  }
});

module.exports = router;
