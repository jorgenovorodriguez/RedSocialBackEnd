const getDB = require('../../getDB');
const { generateError } = require('../../../errors.js');

const upDateUsersRegCodeQuery = async (regCode) => {

    let connection;

    try {

        connection = await getDB();

        const [users] = await connection.query(
            `SELECT registrationCode FROM users WHERE registrationCode = ?`,
            [regCode]
        );

        if (users.length < 1) {
            generateError('Codigo de registro invalido', 404);
        }

        const modifiedAt = new Date();

        await connection.query(
            'UPDATE users SET registrationCode = null, active = true, modifiedAt = ? WHERE registrationCode = ?',
            [modifiedAt, regCode]
        )

    } finally {
        if (connection) connection.release();
    }
};

module.exports = upDateUsersRegCodeQuery;