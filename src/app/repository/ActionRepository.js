const Action = require("../model/Action");
const User = require("../model/User")
class ActionRepository {
    async save(data) {
        const user = await User.findById(data._id);
        user.dashboard = data.dashboard;
        await user.save()
    }
}

module.exports = new ActionRepository;