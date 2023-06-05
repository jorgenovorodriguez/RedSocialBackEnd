const upDateUsersRegCodeQuery = require('../../DataBase/queries/usersQuery/upDateUsersRegCodeQuery');


const validateCode = async (req, res, next) => {

    try {

        const { regCode } = req.params;

        await upDateUsersRegCodeQuery(regCode)

        res.send({

            status: 'ok',
            message: 'Usuario activado'
        })

    } catch (err) {

        next(err);
    }
};

module.exports = validateCode;