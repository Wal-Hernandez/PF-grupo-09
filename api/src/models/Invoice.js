const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "invoice",
    {
      dateTime: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      confirmation: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
    },
    {
      timestamps: false,
      // freezeTableName: true
    }
  );
};
