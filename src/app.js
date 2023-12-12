const express = require('express');
const app = express();
const port = 3000;
const middleware = require('./security/middleware')

const route = require('./routes');

app.use(middleware);
// Routes init
route(app);

// app.get('/ping', (req, res) => {
//     res.send('pong');
// });

app.listen(port);