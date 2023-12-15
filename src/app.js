const { engine } = require('express-handlebars');
const express = require('express');
const morgan = require('morgan');
const middleware = require('./security/middleware');

const app = express();
const port = 3000;

const route = require('./routes');

// app.use(middleware);

// middleware xử lý dữ liệu form data
app.use(express.urlencoded());

// HTTP logger
app.use(morgan('combined'));

// Template engine
app.engine('hbs', engine({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set("views", __dirname + '/views');

// Routes init
route(app);

app.listen(port);