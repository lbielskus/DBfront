const express = require('express')
const router = express.Router()
const controller = require('../controllers/mainController')
const validator = require("../validators/main")

// router.post('/add', validator, controller.add)
// router.get('/delete/:id', controller.delete)
// router.post('/update', controller.update)
router.post('/createCar', validator, controller.createCar)

module.exports = router