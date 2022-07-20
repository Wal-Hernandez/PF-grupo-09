const { Router } = require("express");

const City = require("./citiesRouter");
const Hotel = require("./hotelsRouter");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/cities", City);
router.use("/hotels", Hotel);

module.exports = router;
