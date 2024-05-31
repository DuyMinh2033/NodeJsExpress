
const express =require('express')
const router =express.Router()

const meController = require('../app/controller/MeController');
router.get('/store/courses',meController.store)
module.exports = router