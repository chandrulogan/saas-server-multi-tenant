const express = require('express');
const { createProject, getProjectList } = require('../controllers/projectController');
const router = express.Router();

router.post('/create-project', createProject);
router.get('/:subDomine/projectLists', getProjectList);

module.exports = router;
