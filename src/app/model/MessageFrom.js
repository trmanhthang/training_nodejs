const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const MessageFrom = new Schema({
    id_user_from: String,
    message: String,
})

module.exports = MessageFrom;