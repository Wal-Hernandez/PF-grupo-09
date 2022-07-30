const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("cartDetail", {
    
    numberPeople:{
        type:DataTypes.INTEGER,
        allowNull:false
        },
      
  isQualified :{
    type:DataTypes.BOOLEAN,
    allowNull:false,
    defaultValue:false
  } 
  },{timestamps:false});
};
