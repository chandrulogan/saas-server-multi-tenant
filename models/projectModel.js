const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    projectName: {
        type: String,
        required: [true, "Name is mandatory"]
    },
    organisationName: {
        type: String,
        // required: [true, "Name is mandatory"]
    },
});

module.exports = mongoose.model('projects', projectSchema);
