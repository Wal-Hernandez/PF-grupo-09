// const axios = require("axios");
// const e = require("express");
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

const createActivity = async (name, image, price, score, comments, cityId) => {
  try {
   // const city = await City.findAll({where: { id: cityId }})
    const activity = await Activity.create({
      name: name,
      image: image,
      price: price,
      score: score,
      comments: comments,
      cityId: cityId,
    });
   // activity.addCity(city)
    return "Activity created successfully"
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
      if(deleteActivity){
        return {
        msg: "The activity has been removed successfully",
        valor:true,
      }
    }
      return {
       msg: "The activity cannot be removed because the id does not exist",     
      }  
  } catch (err) {
    return{
      msg: "Error createActivity(activityController.js)",
      error: err,
    }
  }
};

const updateActivity = async (id,name,image,price, score, comments, cityId) => {
  try {
    const activity = await Activity.update(
      {
       name,
       image,
       price, 
       score, 
       comments, 
       cityId,
      },
      { where: { id: id } }
    );
    if(activity[0])
    return {
      msg: "the activity was updated successfully",
      valor:true,
    }
    return {
      msg: "the activity to update was not found",
    }

  } catch (err) {
    return{
      msg: "Error updateActivity(activityController.js)",
      error: err,
    }
  }
};

module.exports = { getActivitiesFromCity ,createActivity,getActivities,deleteActivityById,updateActivity};
