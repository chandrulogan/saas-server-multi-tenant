const express = require('express');
const { staffSignUp, staffSignin, getStaffList } = require('../controllers/staffController');
const router = express.Router();

router.post('/staff-signup', staffSignUp);
router.post('/staff-signin', staffSignin);
router.get('/:subDomine/staff-list', getStaffList);

module.exports = router;
