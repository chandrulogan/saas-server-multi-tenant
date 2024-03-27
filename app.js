const express = require('express');
const mongoose = require('mongoose');

// Router imports
const userRoutes = require('./routes/userRoutes');
const staffRoutes = require('./routes/staffRouter');
const projectRoutes = require('./routes/projectRoutes');
const taskRoutes = require('./routes/taskRoutes');

const app = express();
const PORT = 1997;

app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://chandrufsdtesting:chandru@cluster0.2syaxg8.mongodb.net')
    .then(() => console.log('Database connected'))
    .catch(err => console.error('Error connecting to database:', err));

// Routes
app.use('/api', userRoutes); //company signup
app.use('/staff', staffRoutes);
app.use('/project', projectRoutes);
app.use('/task', taskRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Multi Tenant Backend running on port ${PORT}`);
});
