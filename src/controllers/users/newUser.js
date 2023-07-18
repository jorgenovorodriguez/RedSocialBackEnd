const insertUserQuery = require('../../models/usersQuery/insertUserQuery');
const { v4: uuid } = require('uuid');
const { generateError } = require('../../services/errors');
const sendMail = require('../../services/sendMail');

const newUser = async (req, res, next) => {
    try {
        const { email, username, password, personalInfo } = req.body;
        if (!email || !username || !password) {
            generateError('Faltan campos', 400);
        }

        const registrationCode = uuid();

        await insertUserQuery(
            email,
            username,
            password,
            registrationCode,
            personalInfo
        );

        const emailSubject = 'Activación de usuario en tattooArt';

        const emailBody = `

            ¡Hola ${username} bienvenid@ a tattoArt!
            
            Puedes activar tu usuario introduciendo el siguiente código en nuestra web: ${registrationCode}
        `;

        await sendMail(email, emailSubject, emailBody);

        res.send({
            status: 'ok',
            data: registrationCode,
            message:
                'Usuario creado, por favor revise su email para completar la activación de su cuenta',
        });
    } catch (err) {
        next(err);
    }
};

module.exports = newUser;
