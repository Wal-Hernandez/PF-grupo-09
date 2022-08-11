const { Router } = require("express");
const {
    getPackages,
    postPackage,
    getPackageById,
    deletePackagesById,
    updatePackage,
    enablePackageById,
} = require("../controllers/packageController");

const router = Router();

router.get("/", getPackages);
router.get("/:id", getPackageById);
router.post("/", postPackage);
router.delete("/:id", deletePackagesById);
router.put("/enable/:id", enablePackageById)
router.put("/:id", updatePackage);

module.exports = router;