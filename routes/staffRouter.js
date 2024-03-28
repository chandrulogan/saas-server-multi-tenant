const express = require('express');
const { staffSignUp, staffSignin } = require('../controllers/staffController');
const router = express.Router();

router.post('/staff-signup', staffSignUp);
router.post('/staff-signin', staffSignin);

module.exports = router;
