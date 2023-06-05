const insertUserQuery = require('../../DataBase/queries/usersQuery/insertUserQuery');
const { v4: uuid } = require('uuid');
const { generateError } = require('../../errors');
const { sendMail } = require('../../helpers');


const newUser = async (req, res, next) => {
  try {
    const { email, username, password } = req.body;
    if (!email || !username || !password) {
      generateError('Faltan campos', 400);
    }

    const registrationCode = uuid();

    await insertUserQuery(email, username, password);

    const emailSubject = 'Activa tu usuario en Diario de Viajes';

    const emailBody = `

            ¡Bienvenid@ ${username}!

            Por favor, verifica tu usuario a través del http://localhost:8000/users/validate/${registrationCode}.
        `;

    await sendMail(email, emailSubject, emailBody);

    res.send({

      status: 'ok',
      message: 'Usuario creado',
    });

  } catch (err) {

    next(err);
  }
};


module.exports = newUser;
