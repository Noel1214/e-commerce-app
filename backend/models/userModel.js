const mongoose = require('mongoose');

const useSchema = mongoose.Schema({
    userName: {
        type: String,
        required: true,
        trim: true
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
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    phone: {
        type: String,
        trim: true
    },
}, {timestamps: true});

const User = mongoose.model('User', useSchema);

module.exports = User;
