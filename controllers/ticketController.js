const Ticket = require('../models/ticketModel');
const { connectToDatabase } = require('../utils/database');

const createTicket = async (req, res) => {
    const { organization } = req.params;
    const db = connectToDatabase(organization);
    try {
        // Create a new collection for tickets
        const TicketModel = db.model('Ticket', Ticket.schema);
        const newTicket = new TicketModel({
            name: req.body.name,
            email: req.body.email,
            issue: req.body.issue,
        });
        await newTicket.save();
        res.status(201).json(newTicket);
    } catch (err) {
        res.status(400).json({ message: err.message });
    } finally {
        // Close the connection after saving the ticket
        db.close();
    }
};

module.exports = { createTicket };
