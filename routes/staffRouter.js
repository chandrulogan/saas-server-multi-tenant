const express = require('express');
const { staffSignUp } = require('../controllers/staffController');
const router = express.Router();

router.post('/staff-signup', staffSignUp);

module.exports = router;
