const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const userSchema = mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    phone: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

userSchema.methods.generateAuthToken = function () {
  try {
    return jwt.sign(
      {
        userId: this._id.toString(),
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );
  } catch (error) {
    console.log(error.message);
  }
};

const User = mongoose.model("User", userSchema);

module.exports = User;
