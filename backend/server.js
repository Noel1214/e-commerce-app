// Packages
const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');


// Utils 
const connectDB = require('./config/db.js');

// importing routers 
const userRouter = require('./routes/userRoute.js');

// Configurations
dotenv.config(); // envoriment variables configurations
connectDB(); // database connection function
const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// setting routes 
app.use('/api/user', userRouter);


// Getting port and listening function
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`PORT listening on ${PORT}`);
});

