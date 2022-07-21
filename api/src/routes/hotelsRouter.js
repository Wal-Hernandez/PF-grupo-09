const { Router } = require("express");
const { getHotels, createHotel ,getHotel} = require("../controllers/hotelsControllers");
const router = Router();

router.get("/", async (req, res) => {
  try {
    const hotels = await getHotels();

    return res.status(200).json(hotels);
  } catch (err) {
    return res.status(400).json(err);
  }
});
router.get("/:id", async (req, res) => {
  try {
    const{id}=req.params
    const hotel = await getHotel(id);

    return res.status(200).json(hotel);
  } catch (err) {
    return res.status(400).json(err);
  }
});


router.post("/", async (req, res) => {
  try {
    const {
      name,
      location,
      stars,
      phone,
      price,
      pool,
      wifi,
      gym,
      urlImage,
      cityId,
    } = req.body;
    let hotel = await createHotel(
      name,
      location,
      stars,
      phone,
      price,
      pool,
      wifi,
      gym,
      urlImage,
      cityId
    );
    return res.status(201).json(hotel);
  } catch (err) {
    return res.status(400).json(err);
  }
});

module.exports = router;
