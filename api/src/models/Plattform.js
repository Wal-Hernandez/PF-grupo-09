const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('plattform', {
    terminal: {
      type: DataTypes.STRING,
      allowNull: false,
    },


    address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    location: {
      type: DataTypes.ARRAY(DataTypes.DECIMAL),
      allowNull: false,
    },
  
  },{timestamps:false});
};