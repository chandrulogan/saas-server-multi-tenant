const express = require('express');
const { createTask } = require('../controllers/taskController');
const router = express.Router();

router.post('/create-task', createTask);

module.exports = router;
