const express = require('express');
const mongoose = require('mongoose');
// const { connectToDatabase } = require('./utils/database');
const userRoutes = require('./routes/userRoutes');
const ticketRoutes = require('./routes/ticketRoutes');

const app = express();
const PORT = 1997;

app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://chandrufsdtesting:chandru@cluster0.2syaxg8.mongodb.net')
    .then(() => console.log('Database connected'))
    .catch(err => console.error('Error connecting to database:', err));

// Routes
app.use('/api', userRoutes);
app.use('/api', ticketRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Multi Tenant Backend running on port ${PORT}`);
});
