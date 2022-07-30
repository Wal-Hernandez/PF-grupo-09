const { Router } = require("express");
const {
 createCart,deleteCartById,getCart,updateCartById
} = require("../controllers/cartControllers");
const router = Router();


router.get("/:id", async (req, res) => {
  try {
    const {id}=req.params
    const cart= await getCart(id);
    
    return res.status(200).json(cart);
  } catch (err) {
    return res.status(400).json(err);
  }
});


router.post("/:id", async (req, res) => {
  try {
    const {id}=req.params
    const {userId} = req.body;
    let cart = await createCart( id,userId);
    return res.status(201).json(cart);
  } catch (err) {
    return res.status(400).json(err);
  }
});
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const cart = await deleteCartById(id);
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