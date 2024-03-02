const User = require("../model/User")
class ActionRepository {
    async save(data) {
        const user = await User.findById(data._id);
        user.dashboard = data.dashboard;
        await user.save()
    }

    async saveMessage(data) {
        const userFrom = await User.findById(data.from);
        const userTo = await User.findById(data.to);

        if (userFrom && userTo) {
            userFrom.message_to.push({
                "id_user_to": data.to,
                "message": data.message
            });

            await userFrom.save();

            userTo.message_from.push({
                "id_user_from": data.from,
                "message": data.message
            })

            await userTo.save();

            return {
                "message": "Success!"
            }
        } else {
            return {
                "message": "Message has not been sent yet!"
            }
        }
    }

    findById(id) {
        return User.findById(id);
    }
}

module.exports = new ActionRepository;