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

exports.insertProduct =  async(req, res) =>{
  try {
    let chunkData = [];
    req.on('data', (chunk)=>{
      chunkData.push(chunk)
    })
    req.on('end', async()=>{
    const formData =  chunkData.toString();
    // Data get from form request
    const data  = JSON.parse(formData);
    // Insert data to database
    const product =  await Product.create(data);
    // const newProduct = new Product(data);
    // const product  =  await newProduct.save();  
    if(product){
      res.end(JSON.stringify(product))
    }
    })
    
  } catch (error) {
    console.log(error.message)
  }
}
