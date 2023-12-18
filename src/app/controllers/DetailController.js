const Product = require('../model/Product');
class DetailController {
    getOne(req, res, next) {
        // let id = req.param.id;
        // try {
        //     Product.findById({id})
        //         .then(product => {
        //             res.render('detail', { product });
        //         })
        // } catch (err) {
        //
        // }

    }
}

module.exports = new DetailController;