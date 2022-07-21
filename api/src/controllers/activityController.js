const axios = require("axios");
const e = require("express");
const { Op } = require("sequelize");
const { Activity, City } = require("../db");


const getActivities=async()=>{
  try {
     let activities = await Activity.findAll()
 return activities;
  } catch (err) {
    return {
      msg: "Error getActivities(activityController.js)",
      error: err,
    };
  }
 
}
const getActivitiesFromCity = async (idCity) => {
  try {
    let activitiesFromCity = await Activity.findAll({
      where: { cityId: idCity },
      include: {
        model: City,
        attributes: [],
      },
    });
    console.log(activitiesFromCity);
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
   // const city = await City.findAll({where: { id: cityId }})
    const activity=await Activity.create(
      {name:name,
       description:description,
       price:price,
       cityId:cityId
      })
   // activity.addCity(city)
    return "Activity created successfully"
  } catch (err) {
    return {
      msg: "Error createActivity(activityController.js)",
      error: err,
    };
  }
};

module.exports = { getActivitiesFromCity ,createActivity,getActivities};
