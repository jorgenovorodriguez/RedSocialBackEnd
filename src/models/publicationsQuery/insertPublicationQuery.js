const getDB = require('../../db/getDB');

const insertPublicationQuery = async (
  title,
  photoName,
  place,
  description,
  userId
) => {
  let connection;

  //Incluir mensaje de error si no hay foto

  try {
    connection = await getDB();

    const createdAt = new Date();

    // Insertamos la publicación.
    const [publication] = await connection.query(
      `INSERT INTO publications(title, photoName, place, description, userId, createdAt) VALUES(?, ?, ?, ?, ?, ?)`,
      [title, photoName, place, description, userId, createdAt]
    );

    // Retornamos la publicación.
    return {
      id: publication.insertId,
      title,
      photoName,
      place,
      description,
      userId,
      createdAt,
    };
  } finally {
    if (connection) connection.release();
  }
};

module.exports = insertPublicationQuery;
