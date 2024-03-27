const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is mandatory"]
    },
    email: {
        type: String,
        required: [true, "Name is mandatory"],
        unique: [true, "Email  is already registered"]
    },
    mobileNumber: {
        type: Number,
        required: [true, "mobileNumber is mandatory"]
    },
    password: {
        type: String,
        default: "Password1234",
        // required: [true, "password is mandatory"]
    },
    organisationName: {
        type: String,
    },
});

module.exports = mongoose.model('staff', staffSchema);
