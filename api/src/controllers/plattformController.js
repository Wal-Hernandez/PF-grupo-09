const e = require("express");

const { Plattform } = require("../db");

 const getPlattforms= async () => {
   try {
     let plattforms = await Plattform.findAll({});
     
     return plattforms;
   } catch (err) {
     return {
      msg: "Error getPlattforms(plattformController.js)",
      error: err,
    };
   }
 };

 const getPlattform= async (id) => {
  try {
    let plattform = await Plattform.findByPk(id);
    
    return plattform;
  } catch (err) {
    return {
     msg: "Error getPlattform(plattformController.js)",
     error: err,
   };
  }
};





 const createPlattform = async (terminal,address,location) => {
  try {
  
    const plattform=await Plattform.create(
      {
       terminal:terminal,
       address:address,
       location:location,
      })
    
     return "platform created successfully"
       
      
  } catch (err) {
    return {
      msg:"Error createPlattform(plattformController.js)",
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

const updateActivity = async (id,name,description,price,cityId,) => {
  try {
    const activity = await Package.update(
      {
       name,
       description,
       price,
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


 module.exports={getPlattforms,createPlattform,getPlattform, updateActivity, deleteActivityById}

