const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const taskRoutes = require('./routes/taskRoutes')
require('dotenv').config();

//Connecting to MongoDB
connectDB();

//API app setting
const app = express();
app.use(express.json());
app.use(cors());

//API routing handling
app.use('/api/v1/ctm', taskRoutes);

//Setting port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;