const { Bus } = require("../db");
const { Op } = require("sequelize");

/* ----------------------------------------GET BUS------------------------------------------- */

const getBuses = async (req, res, next) => {
  
  try {
    const allBuses = await Bus.findAll()
    res.status(200).json(allBuses)
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
    const busParam = id && await Bus.findAll({
          where: {
            id: {
                [Op.eq]: `${Number(id)}`
            }
          },
        })
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

const postBus = async(req, res, next)=>{
    const {patent, seating} = req.body;

    try {
        await Bus.create({
            patent, seating
        })
        res.status(201).send("Success")
    } catch (error) {
        res.json({
          msg: "Couldn't create bus",
          error: error
        })
    }
}

/* ----------------------------------------DELETE BUS------------------------------------------- */

// const deleteBus = async(req, res, next)=>{
//   try {
//     const { id } = req.params;
//     const busById = await findByPk(id);
    
    
//   } catch (error) {
    
//   }
// }

module.exports = {getBuses, getBusesById, postBus };
