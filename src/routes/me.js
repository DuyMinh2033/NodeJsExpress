const express = require('express');
const router = express.Router();

const meController = require('../app/controller/MeController');
router.get('/store/courses', meController.stored);
router.get('/trash/courses', meController.trash);

module.exports = router;