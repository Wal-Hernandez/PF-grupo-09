const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {

    // defino el modelo
    sequelize.define('city', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        location: {
            type: DataTypes.ARRAY(DataTypes.DECIMAL),
            allowNull: false,
        },
        image: {
            type: DataTypes.ARRAY(DataTypes.STRING),
        },
        enabled: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
        },
    }, { timestamps: false });
};