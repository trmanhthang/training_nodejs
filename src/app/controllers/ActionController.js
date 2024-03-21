const actionService = require('../service/ActionService');
const path = require("path");
class ActionController {
    async add(req, res) {
        const data = req.body;
        await actionService.save(data);
        res.json({
            msg: "OK"
        })
    }

    async chatMessage(req, res) {
        const data = req.body;
        const result = await actionService.saveMessage(data)
        res.json(result)

    }

    async uploadFile(req, res) {
        const result = await actionService.uploadFile(req.body.id, req.file)
        res.status(result.statusCode).json({
            message: result.message,
        })
    }

    async downloadFile(req, res) {
        try {
            const result = await actionService.downloadFile(req.body);
            res.status(200).sendfile(`./src/public/file/${result.filename}`)
        } catch {
            res.status(400).json({
                message: 'File not found'
            })
        }

    }

    async getAllUser(req, res) {
        const result = await actionService.getAllUser();
        console.log(result)
        res.status(result.statusCode).json(result.users);
    }
}

module.exports = new ActionController;