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

 module.exports={getPlattforms,createPlattform}