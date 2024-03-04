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
        const file = await new File({"path": req.file.path})
        file.save()
        res.json({
            "message": req.file.path
        })
    }
}

module.exports = new ActionController;