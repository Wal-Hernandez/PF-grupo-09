const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "hotel",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      location: {
        type: DataTypes.ARRAY(DataTypes.DECIMAL),
        allowNull: false,
      },
      stars: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      pool: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      wifi: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      gym: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      urlImage: {
        type: DataTypes.ARRAY(DataTypes.STRING),
      },  
      enabled: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    { timestamps: false }
  );
};
