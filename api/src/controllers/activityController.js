// const axios = require("axios");
// const e = require("express");
const { Op } = require("sequelize");
const { Activity, City } = require("../db");

const getActivities = async () => {
  try {
    let activities = await Activity.findAll();
    return activities;
  } catch (err) {
    return {
      msg: "Error getActivities(activityController.js)",
      error: err,
    };
  }
};
const getActivitiesFromCity = async (idCity) => {
  try {
    let activitiesFromCity = await Activity.findAll({
      where: { cityId: idCity },
      include: {
        model: City,
        attributes: [],
      },
    });
    return activitiesFromCity;
  } catch (err) {
    return {
      msg: "Error getActivitiesFromCity(activityController.js)",
      error: err,
    };
  }
};

const createActivity = async (name, description, price, cityId) => {
  try {
    if (!name || !description || !price || !cityId) {
      return "All fields are required";
    }
    if (typeof name !== "string") {
      return "Only letters are allowed in the name field";
    }

    const activity = await Activity.create({
      name: name,
      description: description,
      price: price,
      cityId: cityId,
    });
    return "Activity created successfully";
  } catch (err) {
    return {
      msg: "Error createActivity(activityController.js)",
      error: err,
    };
  }
};

const deleteActivityById = async (id) => {
  try {
    const deleteActivity = await Activity.destroy({
      where: { id: id },
    });
    if (deleteActivity) {
      return {
        msg: "The activity has been removed successfully",
        valor: true,
      };
    }
    return {
      msg: "The activity cannot be removed because the id does not exist",
    };
  } catch (err) {
    return {
      msg: "Error createActivity(activityController.js)",
      error: err,
    };
  }
};

const updateActivity = async (id, name, description, price, cityId) => {
  try {
    if (!name || !description || !price || !cityId) {
      return "All fields are required";
    }
    if (typeof name !== "string") {
      return "Only letters are allowed in the name field";
    }

    const activity = await Package.update(
      {
        name,
        description,
        price,
        cityId,
      },
      { where: { id: id } }
    );
    if (activity[0])
      return {
        msg: "the activity was updated successfully",
        valor: true,
      };
    return {
      msg: "the activity to update was not found",
    };
  } catch (err) {
    return {
      msg: "Error updateActivity(activityController.js)",
      error: err,
    };
  }
};

module.exports = {
  getActivitiesFromCity,
  createActivity,
  getActivities,
  deleteActivityById,
  updateActivity,
};
