const { DataTypes } = require("sequelize");
const{moment} = require("moment");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("booking", {
    id:{type:DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement: true},
    dateTime: {
      type: DataTypes.DATE,
      allowNull: false,
      // set(value) { // or use get(){ }
      //   this.setDataValue(value).toLocaleString('en-GB', { timeZone: 'UTC' });
      // },
      get: function() { // or use get(){ }
        return this.getDataValue('dateTime')
          .toLocaleString('en-GB', { timeZone: 'UTC' });
      }
    },
    amount: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    numberPeople: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },{timestamps:false});
};
