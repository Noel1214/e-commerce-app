const mongoose = require('mongoose');

const useSchema = mongoose.Schema({
    name: {
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
    role: {
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
