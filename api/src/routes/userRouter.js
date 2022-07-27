const { Router } = require("express");
const router = Router();
const { getUser, createUser ,getUsers} = require("../controllers/userController");

router.get("/", async (req, res) => {
  try {
    const users = await getUsers();
    return res.status(200).json(users);
  } catch (err) {
    return res.status(400).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const {id}=req.params
    const user = await getUser(id);
    return res.status(200).json(user);
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
