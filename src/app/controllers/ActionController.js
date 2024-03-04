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
}

module.exports = new ActionController;