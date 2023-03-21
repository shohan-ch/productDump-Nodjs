const productController =  require('../controllers/ProductController')
exports.route  = (req, res) =>{
    const {url} = req;
    if(url==="/") productController.getAll(res)

}