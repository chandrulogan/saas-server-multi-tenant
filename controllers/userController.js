const { connectToDatabase } = require('../utils/database');
const UserModel = require('../models/userModel');
const domainModel = require('../models/subdomineModel')

const createUser = async (req, res) => {
    const organization = req.body.organisationName;
    let formattedDbName = organization.toLowerCase().replace(/&/g, "and").replace(/ /g, "-").split("").filter(char => char !== "/").join("");
    const db = connectToDatabase(formattedDbName);

    try {
        // Create a new collection for users
        const User = db.model('Admin', UserModel.schema);
        const newUser = new User({
            organisationName: req.body.organisationName,
            name: req.body.name,
            email: req.body.email,
            mobileNumber: req.body.mobileNumber,
            password: req.body.password,
            confirmPassword: req.body.confirmPassword,
            role: req.body.role,
            subDomine: formattedDbName
        });

        await newUser.save();

        // Close the connection after saving the user
        db.close();

        // Now, create a new domain
        const domainDb = connectToDatabase('odnine-tenant');
        const domain = domainDb.model('odnine-tenant', domainModel.schema);
        const newDomain = new domain({
            organisationName: req.body.organisationName,
            name: req.body.name,
            email: req.body.email,
            mobileNumber: req.body.mobileNumber,
            password: req.body.password,
            confirmPassword: req.body.confirmPassword,
            role: req.body.role,
            registeredDomains: formattedDbName
        });

        await newDomain.save();
        domainDb.close();

        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const companySignIn = async (req, res) => {
    const { email, password } = req.body;

    try {
        const db = connectToDatabase("odnine-tenant");

        // Find the user by email and password
        const User = db.model('odnine-tenant', UserModel.schema);
        const user = await User.findOne({ email, password });
        console.log(user);
        // If user not found, return error
        if (!user) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        // Close the connection
        db.close();

        res.status(200).json({ message: "Sign in successful" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = { createUser, companySignIn };
