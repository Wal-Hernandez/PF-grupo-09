const { Business } = require("../db");
const { Op } = require("sequelize");


/* ----------------------------------------GET BUS------------------------------------------- */

const getBusesiness = async (req, res, next) => {
  try {
    const allBusiness = await Business.findAll();
    res.status(200).json(allBusiness);
  } catch (error) {
    res.status(404).json({
      msg: "There are no business to show",
      error: error,
    });
  }
};
const getBusinessById = async (req, res, next) => {
  const { id } = req.params;

  try {
    const businessParam =
      id &&
      (await Business.findAll({
        where: {
          id: {
            [Op.eq]: `${Number(id)}`,
          },
        },
      }));
    busParam.length
      ? res.status(200).json(businessParam)
      : res.status(404).json({
          error: "Busines no encontrados",
        });
  } catch (error) {
    res.status(404).json({
      msg: "Error getBusinesById(businessController.js)",
      error: error,
    });
  }
};

/* ----------------------------------------POST BUS------------------------------------------- */

const postBusiness = async (req, res, next) => {
  const { name, phone,email } = req.body;

  try {
    await Business.create({
      name, phone,email
    });
    res.status(201).send("Success");
  } catch (error) {
    res.json({
      msg: "Error postBusiness(businessController.js)",
      error: error,
    });
  }
};

/* ----------------------------------------DELETE BUS------------------------------------------- */

const deleteBusinessById = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteBusiness = await Business.destroy({
      where: { id: id },
    });

    if (deleteBusiness) {
      return res.status(201).json({
        msg: "The business has been removed successfully",
        valor: true,
      });
    } else {
      return res.status(400).json({
        msg: "The business cannot be removed because the id does not exist",
      });
    }
  } catch (error) {
    return res.status(400).json({
      msg: "Error deleteBusinessById(businessController.js)",
      error: error,
    });
  }
};

const updateBusinessById = async (req, res) => {
  const { id } = req.params;
  const {name, phone,email} = req.body;
  try {
    if (!name||!phone||!email) {
      return res.status(404).json({
        msg: "All fields are required",
      });
    }
    const businessUpdate = await Business.update({ name, phone,email}, { where: { id: id } });
  
    if (businessUpdate[0]) {
      return res.status(201).json({
        msg: "The business has been update successfully",
        valor: true,
      });
    } else {
      return res.status(400).json({
        msg: "The business cannot be updated because the id does not exist",
      });
    }
  } catch (error) {
    return res.status(400).json({
      msg: "Error updateBusinessById(busController.js)",
      error: error,
    });
  }
};

module.exports = {
  getBusesiness,
  getBusinessById,
  postBusiness,
  deleteBusinessById,
  updateBusinessById
};
