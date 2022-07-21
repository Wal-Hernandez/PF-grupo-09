const { Package, Activity, Bus, Plattform, City, Hotel } = require("../db");

const getPackages = async (req, res, next) => {
  try {
    const allPackages = await Package.findAll({
      include: [
        {
          model: Activity,

          through: {
            attributes: [],
          },
        },
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
    res.status(200).json(allPackages);
  } catch (error) {
    res.status(404).json({
      msg: "There are no packages to show",
      error: error,
    });
  }
};

const getPackageById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const packageById =
      id &&
      (await Package.findByPk(Number(id), {
        include: [
          {
            model: Activity,

            through: {
              attributes: [],
            },
          },
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
      }));

    packageById
      ? res.status(200).json(packageById)
      : res.status(404).json({
          msg: "Package not found",
        });
  } catch (error) {
    res.status(404).json({
      msg: "Error getPackageById(packageController.js)",
      error: error,
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
    if (
      !name ||
      !start_date ||
      !end_date ||
      !price ||
      !discount ||
      !activity ||
      !busId ||
      !plattformId ||
      !cityId ||
      !hotelId ||
      !stock
    ) {
      return res.status(404).json({
        msg: "All fields are required",
      });
    }
    if (
      busId < 1 ||
      plattformId < 1 ||
      cityId < 1 ||
      hotelId < 1 ||
      stock < 1
    ) {
      return res.status(404).json({
        msg: "Negative numbers are not allowed",
      });
    }
    if (typeof name !== "string") {
      return res.status(404).json({
        msg: "Only letters are allowed in the name field",
      });
    }
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
    console.log(activities);
    await newPackage.addActivities(activities);

    res.status(201).send("Package created successfully");
  } catch (error) {
    res.json({
      msg: "Couldn't create package",
      error: error.parent.detail,
    });
  }
};
const deletePackagesById = async (req, res) => {
  const { id } = req.params;
  try {
    const findbyid = await Package.findByPk(id);
    if (findbyid) {
      const deletePackages = await Package.destroy({
        where: { id: id },
      });
      return res.status(201).json({
        msg: "The package has been removed successfully",
        deletePackages,
      });
    }
  } catch (error) {
    return res.status(400).json({
      msg: "The package cannot be removed because the id does not exist",
    });
  }
};

const updatePackage = async (req, res) => {
  const { id } = req.params;
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
  try {
    const a = Package.update(
      {
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
      },
      { where: { id: id } }
    );
    return res.status(201).json({
      msg: "The package has been update successfully",
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getPackages,
  getPackageById,
  postPackage,
  deletePackagesById,
  updatePackage,
};
