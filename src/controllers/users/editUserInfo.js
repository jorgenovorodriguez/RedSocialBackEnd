const selectUsersByIdQuery = require("../../models/usersQuery/selectUserByIdQuery");
const updateUserInfoQuery = require("../../models/usersQuery/updateUserInfoQuery");
const { generateError } = require("../../services/errors");




const editUserInfo = async (req, res, next) => {
    try {
        if (!req.body?.personalInfo) {
            generateError('Faltan campos', 400);
        }

        const user = await selectUsersByIdQuery(req.user.id);

        const personalInfo = req.body.personalInfo;

        await updateUserInfoQuery(personalInfo, req.user.id);

        res.send({
            status: 'ok',
            message: 'Usuario actualizado',
        });
    } catch (err) {
        next(err);
    }
};

module.exports = editUserInfo;