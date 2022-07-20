const { Package, Activity } = require("../db");

const getPackages = async (req, res, next) => {
  try {
    const allPackages = await Package.findAll();
    allPackages.length
      ? res.status(200).json(allPackages)
      : res.status(404).json({ error: "There are no packages to show" });
  } catch (error) {
    next(error);
  }
};

const getPackageById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const packageById = id && await Package.findByPk(Number(id))
    console.log(packageById)
      
    packageById !== undefined ? res.status(200).json(packageById)
      : res.status(404).json({
          error: "Package not found",
        });
  } catch (error) {
    next(error);
  }
};

const postPackage = async (req, res, next) => {
  try {
    const {
      name,
      start_date,
      end_date,
      price,
      discount,
      activity,
      busId,
      plattformId,
      cityId,
      hotelId,
      stock,
    } = req.body;
    const newPackage = await Package.create({
      name,
      start_date,
      end_date,
      price,
      discount,
      busId,
      plattformId,
      cityId,
      hotelId,
      stock,
    });
    const activities = await Activity.findAll({
      where: {
        name: activity,
      },
    });
    await newPackage.addActivities(activities);

    res.status(201).send("Success");
  } catch (error) {
    next(error);
  }
};

module.exports = { getPackages, getPackageById, postPackage };
