const mongoose=require('mongoose');

const productSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number
    },
    image:{
        type:String
    },
    discount:{
        type:Number,
        default:0
    },
    bgcolor:{
        type:String
    },
    pannelcolor:{
        type:String
    },
    textcolor:{
        type:String
    }
})
module.exports=mongoose.model('product',productSchema)