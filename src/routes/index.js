const homeRouter = require('./home');
const detailRouter = require('./detail');

function route(app) {
    app.use('/:id', detailRouter);
    app.use('/', homeRouter);
}

module.exports = route;