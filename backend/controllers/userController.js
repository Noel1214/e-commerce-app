const User = require("../models/userModel");
const asyncHandler = require("../middlewares/asyncHandler");
const bcrypt = require("bcryptjs");

// Sign Up logic - createUser
const createUser = asyncHandler(async (req, res) => {
  // extracting data coming  from frontend
  const { username, email, phoneNumber, password } = req.body;

  // checking whether all fields are there
  if (!username || !email || !password || !phoneNumber) {
    throw new Error("Please fill all details");
  }

  // checking whether user aldready exists or not
  const userExists = await User.findOne({ email });
  if (userExists) {
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
    phone: phoneNumber,
  });

  try {
    // saving user
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).send("user creation failed");
    console.log("user creation failed");
  }
});

// LOGIN LOGIC - userLogin
const userLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // checking whether email and password are given
  if (!email || !password) {
    return res.status(400).send("Please enter valid credentials");
  }
  
  try {

    // getting user if signed up 
    const userDetails = await User.findOne({ email });
    if (!userDetails) {
      return res.status(404).json({ message: "User not found" });
    }

    
    
    // comparing passwords and validating
    const isPasswordCorrect = await bcrypt.compare(
      password,
      userDetails.password
    );
    if (!isPasswordCorrect) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    
    res.cookie("authToken", userDetails.generateAuthToken(), {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 3600000
    });

    console.log("Sda");
    res.status(200).json({message: "login successfull"});


  } catch (error) {

    console.log(error.message);
    res
      .status(500)
      .json({ message: "error ouccurred while processing the request" });
  }

});

module.exports = { createUser, userLogin };
