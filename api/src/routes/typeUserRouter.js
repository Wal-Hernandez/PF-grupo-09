const { Router } = require("express");
const router = Router();
const { getUserType } = require("../controllers/typeUserController");

router.post("/", async (req, res) => {
  try {
    const userType = await getUserType();
    return res.sendStatus(201).json(userType);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
