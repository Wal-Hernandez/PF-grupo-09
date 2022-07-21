const {Router} = require('express')
const { getBuses, postBus, getBusesById } = require('../controllers/bus-controller')


const router = Router()

router.get('/', getBuses)
router.get('/:id', getBusesById)
router.post('/createBus', postBus)
//router.delete('/deleteBus/:id', deleteBus)


module.exports = router;