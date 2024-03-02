const { check, validationResult } = require('express-validator');

const RequestUserDto = [
    check('name').isLength({ min: 5 }).withMessage('Name must be at least 5 characters'),
    check('email').notEmpty().withMessage('Do not leave email data empty').isEmail().withMessage('Invalid email'),
    check('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters'),
];

const RequestUserLoginDto = [
    check('email').notEmpty().withMessage('Do not leave email data empty').isEmail().withMessage('Invalid email'),
    check('password').notEmpty().withMessage('Do not leave password data empty')
];

const RequestUpdateDashboard = [
    check('_id').notEmpty().withMessage('Do not leave _id data empty'),
    check('dashboard').notEmpty().withMessage('Do not leave dashboard data empty')
]

const RequestMessageDto = [
    check('from').notEmpty().withMessage('Do not leave "from" data empty'),
    check('to').notEmpty().withMessage('Do not leave "to" data empty'),
    check('message').notEmpty().withMessage('Do not leave message data empty')
]

module.exports = { RequestUserDto, RequestUserLoginDto, RequestUpdateDashboard, RequestMessageDto };