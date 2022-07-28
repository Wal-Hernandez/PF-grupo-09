const { Router } = require("express");
const {
  createCartDetail,deleteCartDetailById,getCartDetail,getCartDetails,updatecartDetailById
} = require("../controllers/cartDetailControllers");
const router = Router();

router.get("/:id", async (req, res) => {
  try {
    const {id}=req.params
    const detailCart = await getCartDetail(id);
    
    return res.status(200).json(detailCart);
  } catch (err) {
    return res.status(400).json(err);
  }
});
router.get("/invoice/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const detailsCart = await getCartDetails(id);

    return res.status(200).json(detailsCart);
  } catch (err) {
    return res.status(400).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const {
        idCart,
        idPackage,
        numberPeople,
        isQualified,
    } = req.body;
    let cartDetail = await createCartDetail(
        idCart,
        idPackage,
        numberPeople,
        isQualified,
    );
    return res.status(201).json(cartDetail);
  } catch (err) {
    return res.status(400).json(err);
  }
});
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const cartDetail = await deleteCartDetailById(id);
    return res.status(200).json(cartDetail);
  } catch (error) {
    return res.status(400).json(error);
  }
});
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const {
    numberPeople,
  } = req.body;
  try {
    const cartDetail = await updatecartDetailById(
      id,
      numberPeople,
    );
    return res.status(200).json(cartDetail);
  } catch (error) {
    return res.status(400).json(error);
  }
});

module.exports = router;