const express = require('express');
const { createServer } = require('http');
const { Server } = require('socket.io');
const  { engine } = require('express-handlebars');
const morgan = require('morgan');
const middleware = require('./security/middleware');
const helper = require('./config/handlebars/helper');

const db = require('./config/db');
const port = 3000;

const app = express();
// Tạo một máy chủ http và chuyển express app như một trình xử lý yêu cầu

const server = createServer(app);

// Chuyển thể hiện máy chủ http cho Socket.io
const io = new Server(server);

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});

// Sự kiện lắng nghe client kết nối server
io.on('connection', (socket) => {
    console.log('a user connected' + socket.id);

    socket.on('disconnect', () => {
        console.log('a user disconnect');
    });
});

const route = require('./routes');

db.connect();

// app.use(middleware);

// middleware xử lý dữ liệu form data
app.use(express.urlencoded());

// HTTP logger
app.use(morgan('combined'));

// Template engine
app.engine('hbs', engine({
    extname: '.hbs',
    helpers: helper
}));
app.set('view engine', 'hbs');
app.set("views", __dirname + '/resource/views');

// Routes init
route(app);