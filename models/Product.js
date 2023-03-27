const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    name:{
        type: String,
        required :true
    },
    price:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
     rating:{
        type:Number,
        required:true
    },
    created_at:{
        type:Date,
        default:Date.now
    }

})
const Product = mongoose.model("Product", Schema);
module.exports = Product