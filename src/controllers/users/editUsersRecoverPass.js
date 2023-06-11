const { generateError } = require("../../services/errors");
const upDateUsersRegCodeFinallyQuery = require('../../models/usersQuery/upDateUsersRegCodeFinallyQuery');


const editUsersRecoverPass = async (req, res, next) => {

    try {

        const { recoverPassCode, newPass, confirmPass } = req.body;

        if (!recoverPassCode || !newPass || !confirmPass) {

            generateError('faltan campos por rellenar', 400);
        }

        if (newPass !== confirmPass) {
            generateError('Las contraseñas no coinciden', 401);
        }

        await upDateUsersRegCodeFinallyQuery(recoverPassCode, newPass)

        res.send({

            status: 'ok',
            message: 'contraseña correctamente actualizada'
        })

    } catch (err) {

        next(err);
    }
};


module.exports = editUsersRecoverPass;