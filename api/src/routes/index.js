const { Router } = require("express");

const City = require("./citiesRouter");
const Hotel = require("./hotelsRouter");
const Invoice=require("./invoiceRouter")
const Buses = require('./busRouter')
const Activity=require("./activityRouter")
const Plattform=require("./plattformRouter")
<<<<<<< HEAD
const User=require("./usersRouter")
const TypeUser=require("./typeUserRouter")
=======
const Booking=require("./bookingrouter");
const Package = require('./packageRouter')

const User = require("./userRouter");
const TypeUser = require("./typeUserRouter");

<<<<<<< HEAD


>>>>>>> 3fad8ad1dd70417f984d6ee6d2d15ee5e54c607e
=======
>>>>>>> 421a1268c848cf02c6deffe8974693de0dcf2f76
const router = Router();


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
<<<<<<< HEAD
<<<<<<< HEAD
router.use('/buses', buses)
router.use('/activities',Activity)
router.use('/users', User)
router.use('/typeuserroute', TypeUser)


=======
>>>>>>> 3fad8ad1dd70417f984d6ee6d2d15ee5e54c607e
=======
router.use('/buses', Buses)
router.use('/activities',Activity)
router.use("/cities", City);
router.use("/hotels", Hotel);
router.use('/plattforms',Plattform)
router.use('/booking',Booking);
router.use('/invoices',Invoice)
router.use('/packages', Package)

>>>>>>> 421a1268c848cf02c6deffe8974693de0dcf2f76



router.use('/buses', Buses)
router.use('/activities',Activity)
router.use("/cities", City);
router.use("/hotels", Hotel);
router.use('/plattforms',Plattform)
router.use('/bookings',Booking);
router.use('/invoices',Invoice)
router.use('/packages', Package)
router.use("/users", User);
router.use("/typeusers", TypeUser);



module.exports = router;
