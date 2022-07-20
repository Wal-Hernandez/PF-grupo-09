const { Router } = require("express");

const City = require("./citiesRouter");
const Hotel = require("./hotelsRouter");
const bus = require('./busrouter')
const Activity=require("./activityRouter")
const Plattform=require("./plattformRouter")
const Invoice=require("./invoiceRouter")

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/buses', bus)
router.use('/activities',Activity)
router.use("/cities", City);
router.use("/hotels", Hotel);
router.use('/plattforms',Plattform)
router.use('/invoices',Invoice)


module.exports = router;
