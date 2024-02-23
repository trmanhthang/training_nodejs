const actionRepository = require('../repository/ActionRepository')
class ActionService {
    save(data) {
        actionRepository.save(data).then();
    }
}

module.exports = new ActionService;