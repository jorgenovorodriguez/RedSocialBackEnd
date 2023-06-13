const getDB = require('../../db/getDB');

const updateUserEmailToDeletedQuery = async (userId) => {
  let connection;
  try {
    connection = await getDB();
    // Eliminar comentarios del usuario
    await connection.query('DELETE FROM comments WHERE userId = ?', [userId]);
    // Eliminar likes del usuario
    await connection.query('DELETE FROM likes WHERE userId = ?', [userId]);
    // Eliminar publicaciones del usuario
    await connection.query('DELETE FROM publications WHERE userId = ?', [
      userId,
    ]);
    // Eliminar al usuario
    await connection.query('DELETE FROM users WHERE id = ?', [userId]);
  } finally {
    if (connection) connection.release();
  }
};
module.exports = updateUserEmailToDeletedQuery;
