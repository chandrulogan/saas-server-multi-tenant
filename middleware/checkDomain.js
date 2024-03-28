const mongoose = require('mongoose');
const Tenant = require('../models/subdomineModel'); // Assuming you have a Tenant model

const checkSubdomainAvailability = async (req, res, next) => {
    const { subdomain } = req.body;

    try {
        // Connect to the MongoDB database
        await mongoose.connect(`mongodb+srv://chandrufsdtesting:chandru@cluster0.2syaxg8.mongodb.net/odonine-tenant`);

        // Check if the subdomain already exists in the database
        const existingTenant = await Tenant.findOne({ subDomine:subdomain });
        console.log(existingTenant);
        if (existingTenant) {
            // Subdomain is already taken, send a response
            return res.status(400).json({ message: 'Subdomain is not available' });
        }

        // Subdomain is available, proceed to the next middleware
        next();
    } catch (err) {
        // Handle any errors
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
    } finally {
        // Disconnect from the MongoDB database
        await mongoose.disconnect();
    }
};

module.exports = checkSubdomainAvailability;
