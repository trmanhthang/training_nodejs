const UserRepository = require('../repository/UserRepository')
const {raw} = require("express");
const fs = require("fs");
class UserService {
    findOneByEmail(email) {
        return UserRepository.findOneByEmail(email);
    }

    save(user) {
        UserRepository.save(user).then();
    }

    findOneById(id) {
        return UserRepository.findOneById(id)
    }

    async updateAccount(user) {
        const userOld = await this.findOneById(user._id);
        userOld.email = user.email;
        userOld.password = user.password;
        userOld.name = user.name;
        await UserRepository.save(userOld);
    }
}

module.exports = new UserService;