const { Hotel, City } = require("../db");

const getHotels = async () => {
  try {
    let allHotels = await Hotel.findAll({
      include: {
        model: City,
        attributes: ["name"],
      },
    });

    return allHotels;
  } catch (err) {
    return {
      msg: "Error getHotels(hotelsController.js)",
      error: err,
    };
  }
};
const createHotel = async (
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
) => {
  try {
    const hotelCreate = await Hotel.create({
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
    });

    return "Hotel created successfully";
  } catch (err) {
    return {
      msg: "Error createPlattform(plattformController.js)",
      error: err,
    };
  }
};

module.exports = { getHotels, createHotel };
