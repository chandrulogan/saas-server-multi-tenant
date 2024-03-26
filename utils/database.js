const mongoose = require('mongoose');

const connectToDatabase = (organization) => {
    return mongoose.createConnection(`mongodb+srv://chandrufsdtesting:chandru@cluster0.2syaxg8.mongodb.net/${organization}`);
};

module.exports = { connectToDatabase };