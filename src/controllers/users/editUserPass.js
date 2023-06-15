const { generateError } = require('../../services/errors');
const upDateUsersPassQuery = require('../../models/usersQuery/upDateUsersPassQuery');
const { newPasswordUserSchema } = require('../../schemas/index');

const editUsersPass = async (req, res, next) => {
  try {
    const { currentPass, newPass } = req.body;

    if (!currentPass || !newPass) {
      generateError('Faltan campos', 400);
    }

    await newPasswordUserSchema.validateAsync({ newPass })

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
