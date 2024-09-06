const User = require('../models/userModel');
const asyncHandler = require('../middlewares/asyncHandler');
const bcrypt = require('bcryptjs');

const createUser = asyncHandler(async (req, res) => {

    // extracting data coming  from frontend
    const { username, email, phoneNumber, password } = req.body;

    // checking whether all fields are there 
    if(!username || !email || !password || !phoneNumber){
        throw new Error("Please fill all details");
    }

    // checking whether user aldready exists or not 
    const userExists = await User.findOne({email});
    if(userExists){
      return res.status(400).send("user aldready exists");  
    } 

    // genereating salt
    const salt = await bcrypt.genSalt(10);

    // encrypting user password
    const hashedPassword = await bcrypt.hash(password, salt);

    // creating new user in database
    const newUser = new User({
        userName: username,
        password: hashedPassword,
        email: email,
        phone: phoneNumber
    })

    try{
        // saving user 
        await newUser.save();
        res.status(201).json(newUser);
    }catch (error) {
        res.status(400).send("user creation failed");
        console.log("user creation failed");
    }

});

module.exports = createUser;

