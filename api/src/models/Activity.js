const { DataTypes } = require('sequelize');

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('activity', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image:{
        type:DataTypes.STRING
      },

      price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },

      score: {
        type: DataTypes.ARRAY(DataTypes.INTEGER), 
        
      },
    comments:{
      type:DataTypes.ARRAY(DataTypes.STRING)
    }
  
  },{timestamps:false});
};