const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema(
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
    phoneNumber: {
      type: String,
      trim: true,
    },
    orders: [
      {type: mongoose.Schema.Types.ObjectId, ref: "Product"}
    ],
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

const User = mongoose.model("users", userSchema);

module.exports = User;
