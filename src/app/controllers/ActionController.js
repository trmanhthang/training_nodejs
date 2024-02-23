const actionService = require('../service/ActionService');
class ActionController {
    async add(req, res) {
        const data = req.body;
        await actionService.save(data);
        res.json({
            msg: "OK"
        })
    }
}

module.exports = new ActionController;