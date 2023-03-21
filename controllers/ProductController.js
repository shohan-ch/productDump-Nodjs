const  Product  = require("../models/Product");

exports.getAll = async (res) =>{
    try {
        const product = await Product.find({});
        res.end(JSON.stringify(product));
    } catch (error) {
        console.log(error.message)
    }

}