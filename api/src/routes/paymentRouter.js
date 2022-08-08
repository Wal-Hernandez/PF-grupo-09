const { Router } = require("express");
const router = Router();
const { postPayment ,updateCartPayment} = require("../controllers/paymentController");
const {createCart} = require("../controllers/cartControllers")


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

router.put("/",async (req,res)=>{
  const {id,mail}=req.body
   
  try {
    //actualizar el carrito comprado (cambio de estado)
    let cartUpdate=await updateCartPayment(id)
    // crear un carrito nuevo a ese usuario
    let cartNew=await createCart(mail)
    
    return res.status(200).json(cartNew);
  } catch (error) {
    return error;
  }
 
  
})

module.exports = router;
