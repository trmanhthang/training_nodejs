const express = require('express');
const router = express.Router();
const actionController = require('../app/controllers/ActionController')

router.post('/edit', actionController.add);

module.exports = router;