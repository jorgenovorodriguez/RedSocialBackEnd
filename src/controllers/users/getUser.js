const selectUsersByIdQuery = require('../../models/usersQuery/selectUserByIdQuery');
const { generateError } = require('../../services/errors');

const getUsers = async (req, res, next) => {
  try {
    const { userId } = req.params;

    const user = await selectUsersByIdQuery(userId);

    if (!user) {
      generateError('Usuario no encontrado', 404);
    }

    // Verificar si el usuario está autenticado
    const autoritation = req.user !== undefined;

    delete user.email;

    res.send({
      status: 'ok',
      data: {
        user,
      },
    });
  } catch (err) {
    next(err);
  }
};

module.exports = getUsers;
