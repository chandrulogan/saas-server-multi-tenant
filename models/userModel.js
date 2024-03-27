const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    organisationName: {
        type: String,
        required: [true, "Organisation name is mandatory"],
        unique: [true, "Organisation name is already registered"]
    },
    name: {
        type: String,
        required:[true, "Name is mandatory"]
    },
    email: {
        type: String,
        required: [true, "Name is mandatory"],
    },
    mobileNumber: {
        type: Number,
        required: [true, "mobileNumber is mandatory"]
    },
    password: {
        type: String,
        required: [true, "password is mandatory"]
    },
    confirmPassword: {
        type: String,
        required: [true, "confirmPassword is mandatory"]
    },
    subDomine:{
        type: String,
        required: [true, "Sub domine is required contact support"],
        unique: true
    },
    role:{
        type: String,
        enum: ['user', 'seller', 'admin'],
        default: 'admin'
    }
});

module.exports = mongoose.model('Admin', userSchema);
