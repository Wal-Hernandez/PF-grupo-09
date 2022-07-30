require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');


const {
  DB_USER, DB_PASSWORD, DB_HOST,
} = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/pfhenry`,
  {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  }
);
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring

const { City,Business,Activity,Plattform,Hotel,Package,Cart,StatusCart,User,CartDetail} = sequelize.models;

// Aca vendrian las relaciones

// relationship Activity and City
// id_city-> specify the foreign key, default is "cityid"
City.hasMany(Activity);
Activity.belongsTo(City);

// relationship Hotel and City
City.hasMany(Hotel);
Hotel.belongsTo(City);

// relationship User and TypeUser
// TypeUser.hasMany(User);
// User.belongsTo(TypeUser);

// relationship Cart and User
User.hasMany(Cart);
Cart.belongsTo(User);

// relationship Package and Cart
Package.hasMany(CartDetail);
CartDetail.belongsTo(Package);


// relationship Plattform and Package
Plattform.hasMany(Package);
Package.belongsTo(Plattform);

// relationship Activity and Package
Activity.belongsToMany(Package, {
  through: "package_activity",
  timestamps: false,
});
Package.belongsToMany(Activity, {
  through: "package_activity",
  timestamps: false,
});

// relationship Business and Package 
Business.hasMany(Package);
Package.belongsTo(Business);

// relationship City and Package
City.hasMany(Package);
Package.belongsTo(City);

// relationship Hotel and Package
Hotel.hasMany(Package);
Package.belongsTo(Hotel);

// relationship statusCart and Cart
StatusCart.hasMany(Cart);
Cart.belongsTo(StatusCart);

Cart.hasMany(CartDetail);
CartDetail.belongsTo(Cart);



module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
