const mongoose = require('mongoose');

const ownerSchema = mongoose.Schema({
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
    product:{
        type:Array,
        default:[]
    },
    picture: String
});

module.exports = mongoose.model("owner", ownerSchema)