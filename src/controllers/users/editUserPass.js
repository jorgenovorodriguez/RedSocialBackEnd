const { generateError } = require("../../services/errors");
const upDateUsersPassQuery = require('../../models/usersQuery/upDateUsersPassQuery');

const editUsersPass = async (req, res, next) => {
    try {
        const { currentPass, newPass, confirmPass } = req.body;

        if (!currentPass || !newPass || !confirmPass) {
            generateError('Faltan campos', 400);
        }

        if (newPass !== confirmPass) {
            generateError('Las contraseñas no coinciden', 401);
        }

        await upDateUsersPassQuery(currentPass, newPass, req.user.id);

        res.send({
            status: 'ok',
            message: 'Contraseña actualizada',
        });
    } catch (err) {
        next(err);
    }
};

module.exports = editUsersPass;