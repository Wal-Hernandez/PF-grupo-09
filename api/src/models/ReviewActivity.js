const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo

  sequelize.define('reviewActivity', {
    score: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    title:{
        type: DataTypes.STRING,
        allowNull: false
    },
    comment:{
        type: DataTypes.TEXT,
        allowNull: false
    },
    mail: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  
  },{timestamps:true});
};
