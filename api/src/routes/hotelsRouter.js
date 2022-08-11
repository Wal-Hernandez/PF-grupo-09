const { Router } = require("express");
const {
    getHotels,
    createHotel,
    getHotel,
    updateHotelById,
    deleteHotelById,
    enableHotelById,
} = require("../controllers/hotelsControllers");
const router = Router();

router.get("/", async(req, res) => {
    try {
        const hotels = await getHotels();

        return res.status(200).json(hotels);
    } catch (err) {
        return res.status(400).json(err);
    }
});
router.get("/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const hotel = await getHotel(id);

        return res.status(200).json(hotel);
    } catch (err) {
        return res.status(400).json(err);
    }
});

router.post("/", async(req, res) => {
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
            cityId
        } = req.body;
        const hotels = await createHotel(name, location, stars, phone, price, pool, wifi, gym, urlImage, cityId, )
        return res.status(201).json(hotels);
    } catch (err) {
        return res.status(400).json(err);
    }
});
router.delete("/:id", async(req, res) => {
    const { id } = req.params;
    try {
        const hotel = await deleteHotelById(id);
        return res.status(200).json(hotel);
    } catch (error) {
        return res.status(400).json(error);
    }
});

router.put("/enable/:id", async(req, res) => {
    const { id } = req.params;

    try {
        const hotel = await enableHotelById(
            id,
        );
        return res.status(200).json(hotel);
    } catch (error) {
        return res.status(400).json(error);
    }
})

router.put("/:id", async(req, res) => {
    const { id } = req.params;
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
        cityId
    } = req.body;
    try {
        const hotel = await updateHotelById(
            id,
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
        return res.status(200).json(hotel);
    } catch (error) {
        return res.status(400).json(error);
    }
});

module.exports = router;