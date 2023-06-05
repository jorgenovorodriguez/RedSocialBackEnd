const mysql = require('mysql2/promise');

const { MYSQL_HOST, MYSQL_USER, MYSQL_PASS, MYSQL_DB } = process.env;

let pool;

const getDB = async () => {
  try {
    if (!pool) {
      // Creamos una conexión con la base de datos.
      const db = await mysql.createConnection({
        host: MYSQL_HOST,
        user: MYSQL_USER,
        password: MYSQL_PASS,
        timezone: 'Z',
      });

      // Con la conexión anterior creamos la base de datos si no existe.
      db.query(`CREATE DATABASE IF NOT EXISTS ${MYSQL_DB}`);

      db.query('USE tattooArt');

      pool = mysql.createPool({
        connectionLimit: 10,
        host: MYSQL_HOST,
        user: MYSQL_USER,
        password: MYSQL_PASS,
        database: MYSQL_DB,
        timezone: 'Z',
      });
    }

    return await pool.getConnection();
  } catch (err) {
    console.error(err);
  }
};

module.exports = getDB;
