const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const action = require('../model/Action')

const User = new Schema({
    email: String,
    name: String,
    password: String,
    dashboard: [action],
});

module.exports = mongoose.model('User', User);