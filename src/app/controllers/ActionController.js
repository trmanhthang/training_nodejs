const actionService = require('../service/ActionService');
const File = require('../model/File')
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
        console.log(req.file)
        const file = await new File({"path": req.file.filename})
        file.save()
        res.json({
            "message": `http://localhost:3001/${req.file.filename}`
        })
    }
}

module.exports = new ActionController;