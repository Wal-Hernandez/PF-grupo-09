const { DataTypes } = require('sequelize');

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('bus', {
    patent: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    seating: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    
  
  },{timestamps:false});
};
