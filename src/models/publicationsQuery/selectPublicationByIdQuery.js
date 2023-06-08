const getDB = require('../../db/getDB');

const { generateError } = require('../../services/errors');

const selectPublicationtByIdQuery = async (publicationId, userId = 0) => {
  let connection;

  try {
    connection = await getDB();

    const [publications] = await connection.query(
      `
          SELECT
            P.id,
            P.title,
            P.place,
            P.description,
            U.username,
            P.userId,
            P.photoName,
            P.userId = ? AS owner,                 
            P.createdAt,
            COUNT(L.id) AS likes,
            BIT_OR(L.userId = ?) AS likedByMe
        FROM publications P
        INNER JOIN users U ON U.id = P.userId
        LEFT JOIN likes L ON P.id = L.publicationId
        GROUP BY P.id
      `,
      [userId, publicationId]
    );

    if (publications.length < 1) {
      generateError('Publicacion no encontrada', 404);
    }

    return publications[0];
  } finally {
    if (connection) connection.release();
  }
};

module.exports = selectPublicationtByIdQuery;
