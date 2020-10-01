const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

const connectDB = require('./config/db');


// load environment variables
dotenv.config({ path: './config/config.env' });

connectDB();

const app = express();

app.use(cors());
// Allows to get the data in req.body
app.use(express.json({ extend: false }));

// Routes

app.use('/api/v1/stores', require('./routes/stores.route'));
app.use('/api/v1/geo', require('./routes/geo.route'));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
})