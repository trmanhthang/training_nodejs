const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageTo = new Schema({
    user_to: String,
    message: String,
    subject: String
})

module.exports = MessageTo;