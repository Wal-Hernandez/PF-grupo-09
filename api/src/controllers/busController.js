const { Bus } = require("../db");
const { Op } = require("sequelize");

/* ----------------------------------------GET BUS------------------------------------------- */

const getBuses = async (req, res, next) => {
  try {
    const allBuses = await Bus.findAll();
    res.status(200).json(allBuses);
  } catch (error) {
    res.status(404).json({
      msg: "There are no buses to show",
      error: error,
    });
  }
};
const getBusesById = async (req, res, next) => {
  const { id } = req.params;

  try {
    const busParam =
      id &&
      (await Bus.findAll({
        where: {
          id: {
            [Op.eq]: `${Number(id)}`,
          },
        },
      }));
    busParam.length
      ? res.status(200).json(busParam)
      : res.status(404).json({
          error: "Buses no encontrados",
        });
  } catch (error) {
    res.status(404).json({
      msg: "Bus not found",
      error: error,
    });
  }
};

/* ----------------------------------------POST BUS------------------------------------------- */

const postBus = async (req, res, next) => {
  const { patent, seating } = req.body;

  try {
    await Bus.create({
      patent,
      seating,
    });
    res.status(201).send("Success");
  } catch (error) {
    res.json({
      msg: "Couldn't create bus",
      error: error,
    });
  }
};

/* ----------------------------------------DELETE BUS------------------------------------------- */

const deleteBusesById = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteBuses = await Bus.destroy({
      where: { id: id },
    });

    if (deleteBuses) {
      return res.status(201).json({
        msg: "The bus has been removed successfully",
        valor: true,
      });
    } else {
      return res.status(400).json({
        msg: "The bus cannot be removed because the id does not exist",
      });
    }
  } catch (error) {
    return res.status(400).json({
      msg: "Error deleteBusesById(busController.js)",
      error: error,
    });
  }
};

const updateBusById = async (req, res) => {
  const { id } = req.params;
  const { patent, seating } = req.body;
  try {
    if (!patent || !seating) {
      return res.status(404).json({
        msg: "All fields are required",
      });
    }
    const a = await Bus.update({ patent, seating }, { where: { id: id } });
    console.log(a);
    if (a[0]) {
      return res.status(201).json({
        msg: "The bus has been update successfully",
        valor: true,
      });
    } else {
      return res.status(400).json({
        msg: "The bus cannot be updated because the id does not exist",
      });
    }
  } catch (error) {
    return res.status(400).json({
      msg: "Error updateBusById(busController.js)",
      error: error,
    });
  }
};

module.exports = {
  getBuses,
  getBusesById,
  postBus,
  deleteBusesById,
  updateBusById,
};
