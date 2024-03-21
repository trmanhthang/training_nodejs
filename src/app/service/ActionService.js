const actionRepository = require('../repository/ActionRepository')
const UserRepository = require("../repository/UserRepository");
const fs = require("fs");
class ActionService {
    save(data) {
        actionRepository.save(data).then();
    }

    saveMessage(data) {
        return actionRepository.saveMessage(data).then();
    }

    async uploadFile(userId, file) {
        try {
            const user = await UserRepository.findOneById(userId);
            if (user) {
                user.file.push(file.filename);
                await UserRepository.save(user);
                return {
                    statusCode: 200,
                    message: "Upload Success"
                }
            } else {
                fs.unlink(file.path, (err) => {
                    if (err) {
                        console.error('Lỗi khi xoá tệp tin:', err);
                    }
                });
                return {
                    statusCode: 400,
                    message: "Upload fail"
                }
            }
        } catch (err) {
            fs.unlink(file.path, (err) => {
                if (err) {
                    console.error('Lỗi khi xoá tệp tin:', err);
                }
            });
            return {
                statusCode: 400,
                message: "Upload fail"
            }
        }
    }

    async downloadFile(userId, filename) {
        const user = await UserRepository.findOneById(userId);
        if (user && user.file !== null ) {
            for (let item in user.file) {
                if (item === filename) {
                    return {
                        statusCode: 200,
                        filename: item
                    }
                }
            }

            throw new Error('File not found')
        }
    }
}

module.exports = new ActionService;