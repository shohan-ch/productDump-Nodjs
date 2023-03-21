const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    name:{
        type: String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    description:{
        type:String,
        require:true
    },
     rating:{
        type:Number,
        require:true
    },
    created_at:{
        type:Date,
        default:Date.now
    }

})
const Product = mongoose.model("Product", Schema);
module.exports = Product