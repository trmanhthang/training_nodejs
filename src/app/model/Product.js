const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = new Schema({
    name: { type: String },
    quantity: { type: Number },
    price: { type: Number },
    description: { type: String }
});

module.exports = mongoose.model('Product', Product);