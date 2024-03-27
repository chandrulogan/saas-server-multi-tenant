const mongoose = require('mongoose');

const companydomains = new mongoose.Schema({
    registeredDomains: {
        type: String,
        required: [true, "Organisation name is mandatory"],
        unique: true
    },
    organisationName: {
        type: String,
    },
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    mobileNumber: {
        type: Number,
    },
    password: {
        type: String,
    },
    confirmPassword: {
        type: String,
    },
    subDomine: {
        type: String,
        unique: true
    },
});

module.exports = mongoose.model('registered-domain', companydomains);
