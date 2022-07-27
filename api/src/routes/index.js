const { Router } = require("express");

const City = require("./citiesRouter");
const Hotel = require("./hotelsRouter");
const Business=require("./businessRouter")
const Activity=require("./activityRouter")
const Plattform=require("./plattformRouter")
const Package = require('./packageRouter')
const CartDetail = require("./cartDetail");
const User = require("./userRouter");
const TypeUser = require("./typeUserRouter");


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/business', Business)
router.use('/activities',Activity)
router.use("/cities", City);
router.use("/hotels", Hotel);
router.use('/plattforms',Plattform)
router.use('/packages', Package)
router.use("/users", User);
router.use("/typeusers", TypeUser);
router.use("/cartDetail", CartDetail);


module.exports = router;
