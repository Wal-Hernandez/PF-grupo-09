const { Router } = require("express");
const router = Router();
const { getCities, createCity ,getCity} = require("../controllers/citiesControllers");

router.get("/", async (req, res) => {
  try {
    const cities = await getCities();
    return res.status(200).json(cities);
  } catch (error) {
    return res.status(400).json(err);
  }
});
router.get("/:id", async (req, res) => {
  try {
    const {id}=req.params
    const city = await getCity(id);
    return res.status(200).json(city);
  } catch (error) {
    return res.status(400).json(err);
  }
});
router.post("/", async (req, res) => {
  const { name, location } = req.body;

  try {
    let create = await createCity(name, location);

    return res.send("La ciudad fue creada con exito");
  } catch (error) {
    return res.status(400).json(error);
  }
});
module.exports = router;
