const getDB = require('../../db/getDB');

const { generateError } = require('../../services/errors');

const deleteLikeQuery = async (publicationId, userId) => {
  let connection;

  try {
    connection = await getDB();

    // Comprobamos si el usuario ya ha dado like al tweet.
    const [likes] = await connection.query(
      `SELECT id FROM likes WHERE publicationId = ? AND userId = ?`,
      [publicationId, userId]
    );

    if (likes.length < 1) {
      generateError('Like no encontrado', 404);
    }

    await connection.query(
      `DELETE FROM likes WHERE publicationId = ? AND userId = ?`,
      [publicationId, userId]
    );
  } finally {
    if (connection) connection.release();
  }
};

module.exports = deleteLikeQuery;
