const insertUserQuery = require('../../models/usersQuery/insertUserQuery');
const { v4: uuid } = require('uuid');
const { generateError } = require('../../services/errors');
const sendMail = require('../../services/sendMail');


const newUser = async (req, res, next) => {
  try {
    const { email, username, password } = req.body;
    if (!email || !username || !password) {
      generateError('Faltan campos', 400);
    }

    const registrationCode = uuid();

    await insertUserQuery(email, username, password, registrationCode);

    const emailSubject = 'Activa tu usuario en tattooArt';

    const emailBody = `

            ¡Bienvenid@ ${username} a tattoArt!

            Por favor, verifica tu usuario a través del http://localhost:8000/users/validate/${registrationCode}.
        `;

    await sendMail(email, emailSubject, emailBody);

    res.send({

      status: 'ok',
      message: 'Usuario creado, por favor revise su email para la activación de su cuenta',
    });

  } catch (err) {

    next(err);
  }
};


module.exports = newUser;
