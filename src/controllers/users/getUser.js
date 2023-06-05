const selectUsersByIdQuery = require("../../models/usersQuery/selectUserByIdQuery");
const { errorGenerate } = require("../../services/errors");



const getUsers = async (req, res, next) => {

    try {

        const { userId } = req.params;

        const user = await selectUsersByIdQuery(userId);

        if (!user) {

            errorGenerate('Usuario no encontrado', 404);
        }

        delete user.email;

        res.send({

            status: 'ok',
            data: {

                user,
            }
        })

    } catch (err) {

        next(err);
    }
};


module.exports = getUsers;