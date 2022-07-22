const { Router } = require("express");
const {
  getBuses,
  postBus,
  getBusesById,
  deleteBusesById,
  updateBusById,
} = require("../controllers/busController");

const router = Router();

router.get("/", getBuses);
router.get("/:id", getBusesById);
router.post("/", postBus);
router.delete("/:id", deleteBusesById);
router.put("/:id", updateBusById);

module.exports = router;
