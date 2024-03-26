const express = require('express');
const { createUser } = require('../controllers/userController');

const router = express.Router();

router.post('/users/:organization', createUser);

module.exports = router;
