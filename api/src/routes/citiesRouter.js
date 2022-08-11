const { Router } = require("express");
const router = Router();
const {
    getCities,
    createCity,
    getCity,
    deleteCitiesById,
    updateCitiesById,
    enableCityById,
} = require("../controllers/citiesControllers");

router.get("/", async(req, res) => {
    try {
        const cities = await getCities();
        return res.status(200).json(cities);
    } catch (error) {
        return res.status(400).json(err);
    }
});
router.get("/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const city = await getCity(id);
        return res.status(200).json(city);
    } catch (error) {
        return res.status(400).json(err);
    }
});
router.post("/", async(req, res) => {
    const { name, location,image } = req.body;

    try {
        let create = await createCity(name, location,image);

        return res.send(create);
    } catch (error) {
        return res.status(400).json(error);
    }
});
router.delete("/:id", async(req, res) => {
    const { id } = req.params;
    try {
        const city = await deleteCitiesById(id);
        return res.status(200).json(city);
    } catch (error) {
        return res.status(400).json(error);
    }
});

router.put("/enable/:id", async(req, res) => {
    const { id } = req.params;

    try {
        const city = await enableCityById(
            id,
        );
        return res.status(200).json(city);
    } catch (error) {
        return res.status(400).json(error);
    }
})

router.put("/:id", async(req, res) => {
    const { id } = req.params;
    const { name, location } = req.body;
    try {
        const city = await updateCitiesById(id, name, location);
        return res.status(200).json(city);
    } catch (error) {
        return res.status(400).json(error);
    }
});
module.exports = router;