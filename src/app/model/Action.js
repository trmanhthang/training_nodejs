const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Action = new Schema({
    name: String,
    listTask: [{type: String}]
})

module.exports = Action;