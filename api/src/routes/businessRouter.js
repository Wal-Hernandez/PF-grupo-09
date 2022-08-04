const { Router } = require("express");
const {
 deleteBusinessById,getBusesiness,getBusinessById,postBusiness,updateBusinessById
} = require("../controllers/businessController");

const router = Router();

router.get("/", getBusesiness);
router.get("/:id", getBusinessById);
router.post("/", postBusiness);
router.delete("/:id", deleteBusinessById);
router.put("/:id", updateBusinessById);

module.exports = router;
