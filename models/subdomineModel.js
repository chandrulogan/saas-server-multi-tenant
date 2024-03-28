const mongoose = require('mongoose');

const companydomains = new mongoose.Schema({
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
        // unique: true
    },
});

module.exports = mongoose.model('odonine-tenant', companydomains);
