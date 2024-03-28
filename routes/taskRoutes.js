const express = require('express');
const { createTask, viewTask } = require('../controllers/taskController');
const router = express.Router();

router.post('/create-task', createTask);
router.get('/:subDomine/get-tasklist', viewTask);

module.exports = router;
