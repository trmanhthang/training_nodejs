const express = require('express');
const { createServer } = require('http');
const morgan = require('morgan');

const db = require('./config/db');
const port = 3001;

// Tạo một máy chủ http và chuyển express app như một trình xử lý yêu cầu
const app = express();

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});

const route = require('./routes');

db.connect().then();

// app.use(middleware);

// middleware xử lý dữ liệu form data
app.use(express.urlencoded());

// HTTP logger
app.use(morgan('combined'));

// Xử lý dữ liệu JSON
app.use(express.json())

// Routes init
route(app);