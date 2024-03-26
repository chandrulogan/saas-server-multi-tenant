const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
    name: String,
    email: String,
    issue: String,
});

module.exports = mongoose.model('Ticket', ticketSchema);
