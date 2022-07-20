const { Router } = require("express");

const City = require("./citiesRouter");
const Hotel = require("./hotelsRouter");
const Invoice=require("./invoiceRouter")
const Buses = require('./busRouter')
const Activity=require("./activityRouter")
const Plattform=require("./plattformRouter")
const Package = require('./packageRouter')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/buses', Buses)
router.use('/activities',Activity)
router.use("/cities", City);
router.use("/hotels", Hotel);
router.use('/plattforms',Plattform)
router.use('/invoices',Invoice)
router.use('/packages', Package)


module.exports = router;
