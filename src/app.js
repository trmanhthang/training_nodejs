const express = require('express');
const app = express();
const port = 3000;

const route = require('./routes');

// Routes init
route(app);

// app.get('/ping', (req, res) => {
//     res.send('pong');
// });

app.listen(port);