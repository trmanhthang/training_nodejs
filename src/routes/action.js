const express = require('express');
const router = express.Router();
const actionController = require('../app/controllers/ActionController')
const {RequestUpdateDashboard} = require("../app/validator/dto/Validator");
const {handleValidationErrors} = require("../app/validator/handleValidationErrors");

router.post('/edit', RequestUpdateDashboard, handleValidationErrors, actionController.add);

module.exports = router;