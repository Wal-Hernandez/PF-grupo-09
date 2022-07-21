const { Package, Activity, Bus, Plattform, City, Hotel } = require("../db");

const getPackages = async (req, res, next) => {
  try {
    const allPackages = await Package.findAll({
      include: [
        {
          model: Bus,
          attributes: ["patent"],
        },
        {
          model: Plattform,
          attributes: ["terminal"],
        },
        {
          model: City,
          attributes: ["name"],
        },
        {
          model: Hotel,
          attributes: ["name"],
        },
      ],
    });
    console.log(allPackages)
    res.status(200).json(allPackages);
  } catch (error) {
    res.status(404).json({
      msg: "There are no packages to show",
      error: error
    });
  }
};

const getPackageById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const packageById = id && (await Package.findByPk(Number(id), 
      {include: [
        {
          model: Bus,
          attributes: ["patent"],
        },
        {
          model: Plattform,
          attributes: ["terminal"],
        },
        {
          model: City,
          attributes: ["name"],
        },
        {
          model: Hotel,
          attributes: ["name"],
        },
      ],}
    ));
    res.status(200).json(packageById)
  } catch (error) {
    res.status(404).json({
      msg: "Package not found",
      error: error
    });
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

    res.status(201).send("Package created successfully");
  } catch (error) {
    res.json({
      msg: "Couldn't create package",
      error: error
    });
  }
};

module.exports = { getPackages, getPackageById, postPackage };
