const productService = require('../service/ProductService');
const categoryService = require("../service/CategoryService");
class HomeController {
    getAll(req, res) {
        let listProduct = productService.getAll;
        res.render('home');
    }
}

module.exports = new HomeController;