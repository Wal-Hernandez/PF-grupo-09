const { Router } = require("express");
const router = Router();
const { getUser, createUser } = require("../controllers/userController");

router.get("/", async (req, res) => {
  try {
    const users = await getUser();
    return res.status(200).json(users);
  } catch (err) {
    return res.status(400).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    let { name, surname, mail, password, typeUserId } = req.body;
    console.log(req.body);
    let userCreated = await createUser(
      name,
      surname,
      mail,
      password,
      typeUserId
    );

    return res.status(201).json(userCreated);
  } catch (err) {
    return res.status(400).json(err);
  }
});

module.exports = router;
