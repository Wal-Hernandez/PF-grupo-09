const {Router} = require('express')
const { getBuses, postBus, getBusesById } = require('../controllers/busController')


const router = Router()

router.get('/', getBuses)
router.get('/:id', getBusesById)
router.post('/', postBus)
//router.delete('/deleteBus/:id', deleteBus)


module.exports = router;