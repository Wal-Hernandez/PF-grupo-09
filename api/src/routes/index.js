const { Router } = require("express");

const City = require("./citiesRouter");
const Hotel = require("./hotelsRouter");
const Business=require("./businessRouter")
const Activity=require("./activityRouter")
const Plattform=require("./plattformRouter")
const Package = require('./packageRouter')
const CartDetail = require("./cartDetailRouter");
const User = require("./userRouter");
const TypeUser = require("./typeUserRouter");
const Cart = require("./cartRouter")
<<<<<<< HEAD
const Mailing = require("./mailingRouter");
const Review = require('./reviewRouter')


=======
const Review = require('./reviewRouter')

>>>>>>> 2b74712e773dc95dd6e1363536dc76f2e7106ee5
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
router.use("/cartdetails", CartDetail);
router.use("/carts", Cart);
<<<<<<< HEAD
router.use("/mailing", Mailing)
=======
>>>>>>> 2b74712e773dc95dd6e1363536dc76f2e7106ee5
router.use('/reviews', Review)

module.exports = router;
