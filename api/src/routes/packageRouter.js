const { Router } = require("express");
const {
  getPackages,
  postPackage,
  getPackageById,
  deletePackagesById,
} = require("../controllers/packageController");

const router = Router();

router.get("/", getPackages);
router.get("/:id", getPackageById);
router.post("/", postPackage);
router.delete("/:id", deletePackagesById);

module.exports = router;
