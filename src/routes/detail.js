const express = require('express');
const router = express.Router();
const detailController = require('../app/controllers/DetailController')

router.get("/:id", detailController.getOne);

module.exports = router;