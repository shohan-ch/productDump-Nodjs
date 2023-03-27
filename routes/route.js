const productController = require("../controllers/ProductController");
exports.route = (req, res) => {
  const { url } = req;
  const urlObj = new URL(url, `http://${req.headers.host}`);
//   console.log(urlObj);
  const { href, searchParams, origin } = urlObj;
  const productRoute = `${origin}/products`;
  const id = searchParams.get("id");
//   Get all products  & single products route
  if (href === productRoute && req.method=='GET') productController.getAll(res);
  if (href === productRoute + `?id=${id}` && req.method == "GET")     
    productController.getOne(res, id);
  // Insert Products
  if (href === productRoute && req.method=='POST') productController.insertProduct(req,res);
  // Update Products
  if (href === productRoute + `?id=${id}` && req.method=='PATCH') productController.updateProduct(req,res,id);
   // Delete Products
  if (href === productRoute + `?id=${id}` && req.method=='DELETE') productController.deleteProduct(req,res,id);


};
