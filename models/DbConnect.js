const mongoose = require('mongoose');
const database = 'shop'
module.exports = async() =>{
    try {
    const conn = await mongoose.connect(`mongodb://127.0.0.1:27017/${database}`);
    console.log("Db connected successfully.");
    } catch (error) {
        console.log(error.message)
    }
}