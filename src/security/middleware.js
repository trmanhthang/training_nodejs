function middleware(req, res, next) {
    let id = req.query.id;
    if (id === 'abc123') {
        return next();
    }
    res.send("Không có quyền truy cập!");
}

module.exports = middleware;