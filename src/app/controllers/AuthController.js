const UserService = require('../service/UserService')
const e = require("express");
class AuthController {
    async register (req, res) {
        const avatar = req.file.filename;
        const userReq = req.body;
        const user = await UserService.findOneByEmail(userReq?.email);
        req.body.avatar = avatar;
        if(!user) {
            await UserService.save(userReq);
            res.json({ msg: "OK"})
        } else {
            res.json({ msg: 'Fail!'});
        }
    }

    async login(req, res) {
        const userReq = req.body;
        const user = await UserService.findOneByEmail(userReq.email);
        if (user && userReq.password === user.password) {
            res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
                avatar: `${req.protocol}://${req.host}:${process.env.PORT || 3000}/${user.avatar}`,
                password: user.password,
                dashboard: user.dashboard
            })
        } else {
            res.json({
                msg: "Account does not exist!"
            })
        }
    }

    updateAccount(req, res) {
        UserService.updateAccount(req.body).then();
        res.json({
            msg: 'Update Success!'
        })
    }
}

module.exports = new AuthController;