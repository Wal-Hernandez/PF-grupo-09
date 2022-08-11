const { Router } = require("express");
const {
 createCart,deleteCartById,getCart,updateCartById,clearCart,finishCartById
} = require("../controllers/cartControllers");
const {createCartDetail}=require("../controllers/cartDetailControllers")
const router = Router();


router.get("/:mail", async (req, res) => {
  try {
    const {mail}=req.params
    console.log(mail)
    const cart= await getCart(mail);
    
    return res.status(200).json(cart);
  } catch (err) {
    return res.status(400).json(err);
  }
});


router.post("/", async (req, res) => {
  try {
   
    const {mail} = req.body;
    console.log(mail)
    let cart = await createCart( mail);
    return res.status(201).json(cart);
  } catch (err) {
    return res.status(400).json(err);
  }
});
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const cart = await clearCart(id);
    return res.status(200).json(cart);
  } catch (error) {
    return res.status(400).json(error);
  }
});

router.put("/login", async (req, res) => {
  
  const {
    mail,
    storage
  } = req.body;
  try {
    //traigo el carrito del usuario logeado
    let cart=await getCart(mail);
    //conseguir el id de ese carrito
    let cartJson=JSON.parse(JSON.stringify(cart));
    let idPackageDetails=cartJson[0].cartDetails.map(d=>d.packageId)
    
    console.log("idsPackages:",idPackageDetails);
    //obtengo solo el id de ese usuario
    let id=cartJson[0]['id']
    //agregar los detalles del carrito si hay info en localStorage

    for (let i = 0; i < storage.length; i++) {

      if(!idPackageDetails.includes(storage[i].id))
      {
            let detalle=await createCartDetail (
            idCart=id,
            idPackage=storage[i].id,
            numberPeople=storage[i].quantity,
            isQualified=false
        )
      }
     
     }
     let cartLoad=await getCart(mail);

    return res.status(200).json(cartLoad);
  } catch (error) {
    return res.status(400).json(error);
  }
});



router.put("/finish/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const cart = await finishCartById(
     id
    );
    return res.status(200).json(cart);
  } catch (error) {
    return res.status(400).json(error);
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const {
    statusCartId,
  } = req.body;
  try {
    const cart = await updatecartById(
     id,statusCartId
    );
    return res.status(200).json(cart);
  } catch (error) {
    return res.status(400).json(error);
  }
});





module.exports = router;