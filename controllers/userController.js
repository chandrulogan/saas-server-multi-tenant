const { connectToDatabase } = require('../utils/database');
const UserModel = require('../models/userModel');

const createUser = async (req, res) => {
    const { organization } = req.params;
    const db = connectToDatabase(organization);

    try {
        // Create a new collection for users
        const User = db.model('Admin', UserModel.schema);
        const newUser = new User({
            name: req.body.name,
            email: req.body.email
        });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    } finally {
        // Close the connection after saving the user
        db.close();
    }

};

module.exports = { createUser };
