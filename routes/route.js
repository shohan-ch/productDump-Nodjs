const productController = require("../controllers/ProductController");
exports.route = (req, res) => {
  const { url } = req;
  const urlObj = new URL(url, `http://${req.headers.host}`);
  // console.log(urlObj);
  const { href, searchParams, origin } = urlObj;
  const productRoute = `${origin}/products`;
  const id = searchParams.get("id");
  if (href === productRoute) productController.getAll(res);
  if (href === productRoute + `?id=${id}` && req.method == "GET")
    productController.getOne(res, id);
};
