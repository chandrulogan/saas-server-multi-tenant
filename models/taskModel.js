const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    organisationName: {
        type: String,
        required: [true, "Organisation name is mandatory"],
    },
    projectName: {
        type: String,
        required: [true, "projectName is mandatory"]
    },
    taskInfo: {
        type: String,
        required: [true, "projectName is mandatory"]
    },
    assignedTo: {
        type: String,
        required: [true, "assignedTo is mandatory"]
    },

});

module.exports = mongoose.model('tasklist', taskSchema);
