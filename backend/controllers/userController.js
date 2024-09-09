const User = require("../models/userModel");
const asyncHandler = require("../middlewares/asyncHandler");
const bcrypt = require("bcryptjs");

// Sign Up logic - createUser
const createUser = asyncHandler(async (req, res) => {
  // extracting data coming  from frontend
  const { username, email, phoneNumber, password } = req.body;

  // checking whether all fields are there
  if (!username || !email || !password || !phoneNumber) {
    return res.status(404).json({ message: "Please fill all details" });
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
    phoneNumber: phoneNumber,
  });

  try {
    // saving user
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    console.log("user creation failed");
    res.status(400).send("user creation failed");
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

    // setting cookie in client side called authToken with userId encoded in it
    res.cookie("authToken", userDetails.generateAuthToken(), {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 3600000,
    });

    res.status(200).json({ message: "login successfull" });
  } catch (error) {
    console.log(error.message);
    res
      .status(500)
      .json({ message: "error ouccurred while processing the login request" });
  }
});

// Logout logic - userLogout
const userLogout = asyncHandler(async (req, res) => {

  // simply clearing cookie for authentication
  res.clearCookie('authToken', {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  })

  res.status(200).json({message: "logout successfull"})
})

// Logic to edit user details - editUserDetails
const editUserDetails = asyncHandler(async (req, res) => {
  const { username, email, phoneNumber} = req.body;

  // getting user to edit from id comming from params
  const userToUpdate = await User.findById(req.params.id);

  // checking if user exists if exist then updating corresponding data
  if(userToUpdate) {
    userToUpdate.userName = username || userToUpdate.userName;
    userToUpdate.email = email || userToUpdate.email;
    userToUpdate.phoneNumber = phoneNumber || userToUpdate.phoneNumber;
    
    // saving changes in database
    await userToUpdate.save();   
    
    res.status(200).json({message: "update successfull"});
  } else {
    console.log("could not find user to be updated");
    res.status(401).json({message: "failed to update user"});
  }
});

module.exports = { createUser, userLogin, userLogout, editUserDetails };
