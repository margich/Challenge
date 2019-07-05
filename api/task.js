const express = require('express')
const router = express.Router()
const TaskController = require('../controllers/task')
const ensureAuthenticated = require('./middleware/check-auth')

router.get('/assigned', ensureAuthenticated, TaskController.get_all)

module.exports = router;