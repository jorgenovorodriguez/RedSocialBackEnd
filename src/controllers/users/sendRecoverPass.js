const selectUserByEmailQuery = require('../../models/usersQuery/selectUserEmailQuery');
const updateUserRecoverPassQuery = require('../../models/usersQuery/updateUserRecoverPassQuery');

const randomstring = require('randomstring');

const { generateError } = require('../../services/errors');
const sendMail = require('../../services/sendMail');

const sendRecoverPass = async (req, res, next) => {
  try {
    const { email } = req.body;

    if (!email) {
      generateError('Faltan campos', 400);
    }

    // Comprobamos que exista un usuario con ese email.
    await selectUserByEmailQuery(email);

    // Generamos el código de recuperación de contraseña.
    const recoverPassCode = randomstring.generate(4);

    // Insertamos el código de recuperación en la base de datos.
    await updateUserRecoverPassQuery(email, recoverPassCode);

    // Creamos el asunto del email de recuperación de contraseña
    const emailSubject = 'TattooArt: Recuperación de contraseña';

    // Creamos el contenido del email.
    const emailBody = `
            Se ha solicitado la recuperación de contraseña para este email en TattooArt. 
            
            Utiliza el siguiente código para crear una nueva contraseña: ${recoverPassCode}

            Si no has sido tú ignora este email.
        `;

    // Enviamos el email de verificación.
    await sendMail(email, emailSubject, emailBody);

    res.send({
      status: 'ok',
      message: 'Correo de recuperación enviado',
    });
  } catch (err) {
    next(err);
  }
};

module.exports = sendRecoverPass;
