const getDB = require('../../db/getDB');

const generateError = require('../../services/errors');

const selectPublicationtByIdQuery = async (publicationId, userId = 0) => {
    let connection;

    try {
        connection = await getDB();

        //haria falta poner todo o solo con el p.id llegaria?
        const [publications] = await connection.query(
            `
                SELECT 
                    P.id, 
                    P.title, 
                    P.photoName, 
                    U.username,
                    P.userId = ? AS owner,
                    P.userId, 
                    P.createdAt
                FROM publications P
                INNER JOIN users U ON U.id = P.userId
                WHERE P.id = ?
            `,
            [userId, PublicationId]
        );

        
        if (publications.length < 1) {
            generateError('Publicacion no encontrada', 404);
        }

        
        return publications[0];
    } finally {
        if (connection) connection.release();
    }
};

module.exports = selectPublicationByIdQuery;

