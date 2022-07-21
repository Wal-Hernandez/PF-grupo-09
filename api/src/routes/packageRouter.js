const { Router } = require("express");
const {
  getPackages,
  postPackage,
  getPackageById,
  deletePackagesById,
  updatePackage,
} = require("../controllers/packageController");

const router = Router();

router.get("/", getPackages);
router.get("/:id", getPackageById);
router.post("/", postPackage);
router.delete("/:id", deletePackagesById);
router.put("/:id", updatePackage);

module.exports = router;
