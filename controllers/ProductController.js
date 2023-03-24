const Product = require("../models/Product");

exports.getAll = async (res) => {
  try {
    const product = await Product.find({});
    res.end(JSON.stringify(product));
  } catch (error) {
    console.log(error.message);
  }
};

exports.getOne = async (res, id) => {
  try {
    const singleProduct = await Product.findOne({
      _id: id,
    });
    if (singleProduct) {
      res.end(JSON.stringify(singleProduct));
    } else {
      res.writeHead(404, {
        "Content-Type": "text/plain",
      });
      res.end("Product not found!");
    }
  } catch (error) {
    console.log(error.message);
  }
};
