const getDB = require('../../db/getDB');
const { generateError } = require('../../services/errors');

const deletePublicationQuery = async (publicationId) => {
    let connection;

    try {
        connection = await getDB();

        await connection.beginTransaction();

        await connection.query(
            `DELETE FROM comments WHERE publicationId = ?`,
            [publicationId]
        );

        await connection.query(
            `DELETE FROM publications WHERE id = ?`,
            [publicationId]
        );

        await connection.commit();
    } catch (error) {

        if (connection) await connection.rollback();
        throw error;
    } finally {
        if (connection) connection.release();
    }
};

module.exports = deletePublicationQuery;
