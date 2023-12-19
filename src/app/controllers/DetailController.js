const Product = require('../model/Product');
const { mongooseToObject } = require('../../util/mongoose');

class DetailController {
    getOne(req, res, next) {
        let id = req.params.id;
        try {
            Product.findOne({_id: id})
                .then(product => {
                    res.render('detail', {
                        product: mongooseToObject(product),
                    });
                })
        } catch (err) {
            console.log(err);
        }

    }
}

module.exports = new DetailController;