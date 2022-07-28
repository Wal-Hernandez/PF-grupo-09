const { Package, Activity,Business, Plattform, City, Hotel } = require("../db");
const { Op } = require("sequelize");

const getPackages = async (req, res, next) => {
  try {
    const { destination, start, end, price, stock } = req.query;

    const destinationWhere = destination
      ? { name: { [Op.iLike]: `%${destination}%` } }
      : {};
      // let { start, end } = dateWhere
      // if (start) {
      //   start = start_date
      // }
      // if (end) {
      //   end = end_date
      // }
    const dateWhere = start && end ? { start_date: start, end_date: end } : start ? {start_date: start} : end ? {end_date: end} : {}
    
    let order = []
    if(stock){
      order = ["stock", stock.toUpperCase()]
    } else if(price){
      order = ["price", price.toUpperCase()]
    }else{
      order = ["stock", "NULLS FIRST"]
    }

    const allPackages = await Package.findAll({
      order: [order],
      where: dateWhere,
      include: [
        {
          model: Activity,
      /*     through: {
            attributes: [],
          }, */
        },
        {
          model: Business,
          
        },
        {
          model: Plattform,
          
        },
        {
          model: City,
      /*     where: destinationWhere,
          attributes: ["name"], */
        },
        {
          model: Hotel,
       
        },
      ],
    });

    return res.status(200).json(allPackages);
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
          }
        },
        {
          model: Bussines,
         
        },
        {
          model: Plattform,
         
        },
        {
          model: City,
          
        },
        {
          model: Hotel,
          
        },
      ],}
    ));
    res.status(200).json(packageById)
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
      businessId,
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
      !businessId ||
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
      businessId < 1 ||
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
      businessId,
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
      error: error.parent.detail,
    });
  }
};
const deletePackagesById = async (req, res) => {
  const { id } = req.params;
  try {
    const deletePackages = await Package.destroy({
      where: { id: id },
    });

    if (deletePackages) {
      return res.status(201).json({
        msg: "The package has been removed successfully",
        valor: true,
      });
    } else {
      return res.status(400).json({
        msg: "The package cannot be removed because the id does not exist",
      });
    }
  } catch (error) {
    return res.status(400).json({
      msg: "Error deletePackagesById(packageController.js)",
      error: error,
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
    businessId,
    plattformId,
    cityId,
    hotelId,
    stock,
  } = req.body;
  console.log(req.body)
  try {
    if (
      !name ||
      !start_date ||
      !end_date ||
      !price ||
      !activity ||
      !businessId ||
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
      businessId < 1 ||
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
    const a = await Package.update(
      {
        name,
        start_date,
        end_date,
        price,
        discount,
        businessId,
        plattformId,
        cityId,
        hotelId,
        stock,
      },
      { where: { id: id } }
    );
    const activities = await Activity.findAll({
      where: {
        name: activity,
      },
    });

    const package = await Package.findByPk(id);
    

    await package.setActivities(activities);

    if (a[0]) {
      return res.status(201).json({
        msg: "The package has been update successfully",
        valor: true,
      });
    } else {
      return res.status(400).json({
        msg: "The package cannot be updated because the id does not exist",
      });
    }
  } catch (error) {
    return res.status(400).json({
      msg: "Error updatePackage(packageController.js)",
      error: error,
    });
  }
};

module.exports = {
  getPackages,
  getPackageById,
  postPackage,
  deletePackagesById,
  updatePackage,
};