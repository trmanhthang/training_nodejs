const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/training_nodejs', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
            .then(() => console.log('Connect Success!!!'));
    } catch (err) {
        console.log('Connect Fail!', err);
    }
}

module.exports = { connect };