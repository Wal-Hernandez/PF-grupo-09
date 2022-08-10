const { Router } = require("express");

const City = require("./citiesRouter");
const Hotel = require("./hotelsRouter");
const Business = require("./businessRouter");
const Activity = require("./activityRouter");
const Plattform = require("./plattformRouter");
const Package = require("./packageRouter");
const CartDetail = require("./cartDetailRouter");
const User = require("./userRouter");
const TypeUser = require("./typeUserRouter");
const Cart = require("./cartRouter");
const ReviewHotel = require("./reviewHotelRouter");
const Payment = require("./paymentRouter");
const ReviewActivity = require("./reviewActivityRouter");
const ReviewBusiness = require("./reviewBusRouter");
const Mailing = require("./mailingRouter");
const Admin = require("./adminRouter");
const Shopping = require("./shoppingRouter");
const Stock = require("./stockRouter");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/business", Business);
router.use("/activities", Activity);
router.use("/cities", City);
router.use("/hotels", Hotel);
router.use("/plattforms", Plattform);
router.use("/packages", Package);
router.use("/users", User);
router.use("/typeusers", TypeUser);
router.use("/cartdetails", CartDetail);
router.use("/carts", Cart);
router.use("/hotelreviews", ReviewHotel);
router.use("/payment", Payment);
router.use("/activityreviews", ReviewActivity);
router.use("/businessreviews", ReviewBusiness);
router.use("/mailing", Mailing);
router.use("/admin", Admin);
router.use("/shopping", Shopping);
router.use("/stock", Stock);

module.exports = router;
