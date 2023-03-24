const productController = require("../controllers/ProductController");
exports.route = (req, res) => {
  const { url } = req;
  console.log(req.headers);
  const { pathname, searchParams } = new URL(url, `http://${req.headers.host}`);
  if (pathname === "/") productController.getAll(res);
};
