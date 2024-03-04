const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const File = new Schema({
    path: String,
})

module.exports = mongoose.model('File', File)