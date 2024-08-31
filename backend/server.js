// Packages
const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');


// Utils 
const connectDB = require('./config/db.js');

// Configurations
const app = express();
dotenv.config(); // envoriment variables configurations
connectDB(); // database connection function

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


// Getting port and listening function
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`PORT listening on ${PORT}`);
});

