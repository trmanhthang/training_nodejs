const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageTo = new Schema({
    id_user_to: String,
    message: String
})

module.exports = MessageTo;