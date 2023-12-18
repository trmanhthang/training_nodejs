const Product = require('../model/Product');
const { multipleMongooseToObject } = require('../../util/mongoose');

class HomeController {
    getAll(req, res) {

        Product.find()
            .then(product => {
                res.render('home', {
                    product: multipleMongooseToObject(product),
                });
            })
            .catch( error => {
                res.json('Error: ' + error);
            })
    }
}

module.exports = new HomeController;