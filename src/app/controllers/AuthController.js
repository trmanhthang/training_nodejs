const UserService = require('../service/UserService')
const e = require("express");
const fs = require('fs')
class AuthController {
    async register (req, res) {
        const filePath = req.file.path;
        const avatar = req.file.filename;
        const userReq = req.body;
        const user = await UserService.findOneByEmail(userReq?.email);
        req.body.avatar = avatar;
        if(!user) {
            await UserService.save(userReq);
            res.json({ msg: "OK"})
        } else {
            fs.unlink(filePath, (err) => {
                if (err) {
                    console.error('Lỗi khi xoá tệp tin:', err);
                }
            });
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
                file: user.file,
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