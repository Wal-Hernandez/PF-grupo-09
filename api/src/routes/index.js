const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const buses = require('./bus-router')
const Activity=require("./activityRouter")
const Plattform=require("./plattformRouter")

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/buses', buses)
router.use('/activities',Activity)

router.use('/plattforms',Plattform)

module.exports = router;
