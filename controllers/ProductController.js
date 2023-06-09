const getFormData = require("../lib/getFormData");
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

exports.updateProduct =  async(req,res,id)=>{
  try {
    const data  =  await getFormData(req)
    console.log(data)

    const productUpdate =  await Product.updateOne({
      _id:id
    },
      {
        $set:{
          name:data.name,
          price:data.price,
          rating:data.rating,
          description:data.description
        }
      }
      )
      if(productUpdate){
        res.end(JSON.stringify(productUpdate))
      }else{
        res.end(JSON.stringify('Product not updated'))

      }
  } catch (error) {
    res.writeHead(500,{ 'Content-Type': 'text/plain'});
    res.end(JSON.stringify(error.message))
  }

}

exports.deleteProduct =  async(req,res,id)=>{
  try {
    const productDelete =  await Product.findOneAndDelete({_id:id});
    if(productDelete){
      res.end(JSON.stringify(productDelete))
    }

  } catch (error) {
    console.log(JSON.stringify(error.message))
  
  }

}
