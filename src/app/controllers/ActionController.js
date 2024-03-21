const actionService = require('../service/ActionService');
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

    uploadFile(req, res) {
        const result = actionService.uploadFile(req.body.id, req.file)
        res.status(result.statusCode).json({
            message: result.message,
        })
    }

    downloadFile(req, res) {
        try {
            const result = actionService.downloadFile();
            res.status(result.statusCode).sendFile(`./src/public/file/${result.filename}`)
        } catch {
            res.status(400).json({
                message: 'File not found'
            })
        }

    }
}

module.exports = new ActionController;