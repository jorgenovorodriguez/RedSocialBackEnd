const selectAllUsersQuery = require('../../models/usersQuery/selectAllUsersQuery');

const getListPublication = async (req, res, next) => {
    try {
        const { keyword } = req.query;

        // Dado que la propiedad user puede no existir lo indicamos por medio de la interrogación.
        const users = await selectAllUsersQuery(keyword);

        const isAuthenticated = req.user !== undefined;

        if (!isAuthenticated) {
            users.forEach(user => delete user.email);
        }

        res.send({
            status: 'ok',
            data: {
                users,
            },
        });
    } catch (err) {
        next(err);
    }
};

module.exports = getListPublication;
