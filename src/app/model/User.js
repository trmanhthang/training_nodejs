const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Action = require('../model/Action');
const MessageFrom = require('../model/MessageFrom');
const MessageTo = require('../model/MessageTo')

const User = new Schema({
    email: String,
    name: String,
    password: String,
    avatar: String,
    dashboard: [Action],
    message_from: [MessageFrom],
    message_to: [MessageTo],
});

module.exports = mongoose.model('User', User);