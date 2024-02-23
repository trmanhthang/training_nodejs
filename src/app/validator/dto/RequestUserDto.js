const { check, validationResult } = require('express-validator');

const UserRegister = [
    check('name').isLength({ min: 5 }).withMessage('Tên người dùng phải có ít nhất 5 ký tự'),
    check('email').notEmpty().withMessage('Không để dữ liệu email trống').isEmail().withMessage('Email không hợp lệ'),
    check('password').isLength({ min: 8 }).withMessage('Mật khẩu phải có ít nhất 8 ký tự'),
];

module.exports = { UserRegister };