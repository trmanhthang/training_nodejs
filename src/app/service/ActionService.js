const actionRepository = require('../repository/ActionRepository')
class ActionService {
    save(data) {
        actionRepository.save(data).then();
    }

    saveMessage(data) {
        return actionRepository.saveMessage(data).then();
    }
}

module.exports = new ActionService;