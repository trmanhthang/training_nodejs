const express = require('express');
const router = express.Router();

router.get('/ping', (req, res, next) => {
    res.render('home');
});

module.exports = router;