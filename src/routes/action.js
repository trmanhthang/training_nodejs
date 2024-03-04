const express = require('express');
const router = express.Router();
const actionController = require('../app/controllers/ActionController')
const {RequestUpdateDashboard, RequestMessageDto} = require("../app/validator/dto/Validator");
const {handleValidationErrors} = require("../app/validator/handleValidationErrors");
const upload = require('../config/upload')

router.post('/edit', RequestUpdateDashboard, handleValidationErrors, actionController.add);
router.post('/chat', RequestMessageDto, handleValidationErrors, actionController.chatMessage);

module.exports = router;