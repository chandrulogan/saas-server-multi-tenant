const express = require('express');
const { createUser, companySignIn } = require('../controllers/userController');
const router = express.Router();

router.post('/create-company', createUser);
router.post('/company-signin', companySignIn);

module.exports = router;
