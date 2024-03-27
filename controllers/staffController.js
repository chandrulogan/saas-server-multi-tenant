const { connectToDatabase } = require('../utils/database');
const staffModel = require('../models/staffModel');

const staffSignUp = async (req, res) => {
    const { name, email, mobileNumber, password, organisationName } = req.body;

    const db = await connectToDatabase(organisationName);

    try {
        console.log(req.body);
        const Staff = db.model('staff', staffModel.schema);

        const newStaff = new Staff({
            organisationName: req.body.organisationName,
            name: req.body.name,
            email: req.body.email,
            mobileNumber: req.body.mobileNumber,
            password: req.body.password,
        });

        await newStaff.save();

        // Close the connection after saving the user
        db.close();

        res.status(201).json({
            message: 'Signup successful',
            newStaff
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'User already registered' });
    }
}

module.exports = { staffSignUp };
