const getDB = require('../../db/getDB');
const randomstring = require('randomstring');

const updateUserEmailToDeletedQuery = async (userId) => {
    let connection;

    try {
        connection = await getDB();

        const codeDelete = randomstring.generate(8);
        const deleteUserS = `Este usuario ya no se encuentra en esta app ${codeDelete}`;

        await connection.query('UPDATE users SET modifiedAt = ?, email = ?, password = ?, username = ?, role = NULL, avatar = NULL, personalInfo = ? WHERE id = ?',
            [new Date(), deleteUserS, deleteUserS, deleteUserS, deleteUserS, userId]);
    } finally {
        if (connection) connection.release();
    }
};

module.exports = updateUserEmailToDeletedQuery;
