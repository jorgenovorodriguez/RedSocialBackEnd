const selectUserEmailQuery = require("../../models/usersQuery/selectUserEmailQuery");
const { generateError } = require("../../services/errors");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const loginUsers = async (req, res, next) => {

    const { email, password } = req.body;

    try {

        if (!email) {

            generateError('falta el email', 400);
        } if (!password) {

            generateError('Falta contraseña', 400);
        }

        const user = await selectUserEmailQuery(email);

        const valitedPass = await bcrypt.compare(password, user.password);

        if (!valitedPass) {
            generateError('Contraseña incorrecta', 401);
        }

        const infoToken = {
            id: user.id,
            role: user.role,
        };

        const token = jwt.sign(infoToken, process.env.SECRET, {
            expiresIn: '1d'
        });

        res.send({

            status: 'ok',
            data: {
                token,
            }
        });

    } catch (err) {
        next(err);
    }
};

module.exports = loginUsers;