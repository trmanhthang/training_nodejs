const UserService = require('../service/UserService')
const e = require("express");
class AuthController {
    async register (req, res) {
        const userReq = req.body;
        const user = await UserService.findOneByEmail(userReq?.email);
        if(!user) {
            await UserService.save(userReq);
            res.json({ message: "OK"})
        } else {
            res.json(userReq);
        }
    }

    async login(req, res) {
        const userReq = req.body;
        const user = await UserService.findOneByEmail(userReq.email);
        if (user && userReq.password === user.password) {
            res.json({
                _id: user._id,
                username: user.name,
                email: user.email,
                dashboard: user.dashboard
            })
        } else {
            res.json({message: "Tài khoản không tồn tại!"})
        }
    }
}

module.exports = new AuthController;