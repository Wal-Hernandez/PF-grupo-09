const { Router } = require("express");

const City = require("./citiesRouter");
const Hotel = require("./hotelsRouter");
const buses = require('./bus-router')
const Activity=require("./activityRouter")
const Plattform=require("./plattformRouter")
const Booking=require("./bookingrouter");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/buses', buses)
router.use('/activities',Activity)
router.use("/cities", City);
router.use("/hotels", Hotel);
router.use('/plattforms',Plattform)
router.use('/booking',Booking);








module.exports = router;
