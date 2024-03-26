const express = require('express');
const { createTicket } = require('../controllers/ticketController');

const router = express.Router();

router.post('/tickets/:organization', createTicket);

module.exports = router;
