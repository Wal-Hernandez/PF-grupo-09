const { City } = require("../db");

const getCities = async() => {
    try {
        let cities = await City.findAll({});

        return cities;
    } catch (err) {
        return {
            msg: "Error getCities(citiesControllers.js)",
            error: err,
        };
    }
};

const getCity = async(id) => {
    try {
        let city = await City.findByPk(id);

        return city;
    } catch (err) {
        return {
            msg: "Error getHotels(hotelsController.js)",
            error: err,
        };
    }
};
const createCity = async(name, location) => {
    try {
        if (!name || !location) {
            return "All fields are required";
        }
        if (typeof name !== "string") {
            return "Only letters are allowed in the name field";
        }
        const cities = await City.create({
            name,
            location,
        });
        return { msg: "City created successfully" };
    } catch (err) {
        return {
            msg: "Error createCity(citiesController.js)",
            error: err,
        };
    }
};

const enableCityById = async(id) => {
    try {
        let cityEnable = await City.findByPk(id);
        cityEnable = JSON.parse(JSON.stringify(cityEnable));
        let enableCity = cityEnable.enabled;
        enableCity = !enableCity;
        const a = await City.update({
            enabled: enableCity
        }, { where: { id: id } })
        if (a[0]) {
            return { msg: "The city has been updated successfully", valor: true };
        }
        return { msg: "Id city not found" };
    } catch (error) {
        return {
            msg: "Error enableCityById(hotelsController.js)",
            error: error,
        };
    }

}

const deleteCitiesById = async(id) => {
    try {
        const deleteCity = await City.destroy({
            where: { id: id },
        });

        if (a) {
            return { msg: "The package has been deleted successfully", valor: true };
        }
        return { msg: "Id city not found" };
    } catch (error) {
        return {
            msg: "Error deleteCityById(citiesController.js)",
            error: error,
        };
    }
};
const updateCitiesById = async(id, name, location) => {
    try {
        if (!name || !location) {
            return "All fields are required";
        }
        if (typeof name !== "string") {
            return "Only letters are allowed in the name field";
        }
        const a = await City.update({
            name,
            location,
        }, { where: { id: id } });
        if (a[0]) {
            return { msg: "The package has been update successfully", valor: true };
        }
        return { msg: "Id city not found" };
    } catch (error) {
        return {
            msg: "Error updatePackageById(citiesController.js)",
            error: error,
        };
    }
};
module.exports = {
    getCities,
    createCity,
    getCity,
    deleteCitiesById,
    enableCityById,
    updateCitiesById,
};