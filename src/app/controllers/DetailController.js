class DetailController {
    getOne(req, res) {
        res.render('detail');
    }
}

module.exports = new DetailController;