const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo

  sequelize.define('reviewHotel', {
    score: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    title:{
        type: DataTypes.STRING,
        allowNull: false
    },
    comment:{
        type: DataTypes.TEXT,
        allowNull: false
    }
  },{timestamps:true});
};

