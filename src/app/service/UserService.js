const UserRepository = require('../repository/UserRepository')
class UserService {
    findOneByEmail(email) {
        return UserRepository.findOneByEmail(email);
    }

    save(user) {
        UserRepository.save(user).then();
    }
}

module.exports = new UserService;