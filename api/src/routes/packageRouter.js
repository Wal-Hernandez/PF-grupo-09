const {Router} = require('express')
const { getPackages, postPackage, getPackageById } = require('../controllers/packageController')


const router = Router()

router.get('/', getPackages)
router.get('/:id', getPackageById)
router.post('/createPackage', postPackage)



module.exports = router;