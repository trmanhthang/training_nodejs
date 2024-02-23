const express = require('express');
const router = express.Router();
const authController = require('../app/controllers/AuthController');
const {RequestUserDto, UserRegister} = require("../app/validator/dto/RequestUserDto");
const {handleValidationErrors} = require('../app/validator/handleValidationErrors')

router.post('/register', UserRegister, handleValidationErrors, authController.register);
router.post('/login', authController.login)

module.exports = router;