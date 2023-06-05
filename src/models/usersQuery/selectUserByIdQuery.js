const getDB = require("../../db/getDB");


const selectUsersByIdQuery = async (userId) => {

    let connection;

    try {

        connection = await getDB();

        const [users] = await connection.query(
            `SELECT id, username, email, role, createdAt FROM users WHERE id = ?`,
            [userId]
        );

        return users[0];

    } finally {
        if (connection) connection.release();
    }
};

module.exports = selectUsersByIdQuery;