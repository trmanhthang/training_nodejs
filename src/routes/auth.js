const express = require('express');
const router = express.Router();
const authController = require('../app/controllers/AuthController');
const { RequestUserDto, RequestUserLoginDto} = require("../app/validator/dto/Validator");
const { handleValidationErrors } = require('../app/validator/handleValidationErrors')

router.post('/register', RequestUserDto, handleValidationErrors, authController.register);
router.post('/login', RequestUserLoginDto, handleValidationErrors, authController.login);
router.post('/update',RequestUserDto, handleValidationErrors, authController.updateAccount);

module.exports = router;