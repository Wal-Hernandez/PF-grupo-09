const { City } = require("../db");

const getCities = async () => {
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
const createCity = async (name, location) => {
  try {
    const cities = await City.create({
      name,
      location,
    });

    return "City created successfully";
  } catch (err) {
    return {
      msg: "Error createCity(citiesController.js)",
      error: err,
    };
  }
};
module.exports = { getCities, createCity };