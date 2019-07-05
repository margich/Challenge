const express = require('express')
const router = express.Router()
const PersonnelController = require('../controllers/personnel')

router.post('/login', PersonnelController.login)

module.exports = router;