const { Bus } = require("../db");
const { Op } = require("sequelize");

/* ----------------------------------------GET BUS------------------------------------------- */

const getBuses = async (req, res, next) => {
  
  try {
    const allBuses = await Bus.findAll()
    allBuses.length
      ? res.status(200).json(allBuses)
      : res.status(404).json({
          error: "Buses no encontrados",
        });
  } catch (error) {
    next(error);
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
    next(error);
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
        next(error)
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
