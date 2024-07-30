const mongoose = require('mongoose');

const userSchema =mongoose.Schema({
    name: {
        type: String,
        minLenght: 3,
        trim: true,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    cart:{
        type:Array,
        default:[]
    },
    isAdmin: {
        type: Boolean
    },
    order:{
        type:Array,
        default:[]
    },
    date: {
        type: Date,
        default: Date.now
    },
    contact: Number,
    picture: String
});

module.exports = mongoose.model("users", userSchema)