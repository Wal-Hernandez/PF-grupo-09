const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const Buses = require('./busRouter')
const Activity=require("./activityRouter")
const Plattform=require("./plattformRouter")
const Package = require('./packageRouter')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/buses', Buses)
router.use('/activities',Activity)
router.use('/plattforms',Plattform)
router.use('/packages', Package)

module.exports = router;
