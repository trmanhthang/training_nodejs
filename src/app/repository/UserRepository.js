const User = require("../model/User")
class UserRepository {
    findOneByEmail(email) {
        return User.findOne({"email": email}).exec();
    }

    async save(user) {
        const userCreate = await new User(user);
        await userCreate.save();
    }
}

module.exports = new UserRepository;