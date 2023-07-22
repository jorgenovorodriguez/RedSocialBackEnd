const getDB = require("../../db/getDB");

const activationStatusQuery = async (email) => {
    let connection;

    try {
      connection = await getDB();
  
      const [user] = await connection.query(
        `SELECT active FROM users WHERE email = ?`,
        [email],
      );
  
      if (user.length === 0) {
        throw new Error("El usuario no existe o el email no está registrado.");
      }
  console.log(user[0].active);
      const activeStatus = user[0].active;
  
      if (activeStatus) {
        // Si activeStatus es true, significa que el usuario está activado
        console.log("El usuario está activado.");
      } else {
        // Si activeStatus es false, significa que el usuario no está activado
        console.error("El usuario no está activado.");
      }
  
      return activeStatus;
    } catch (error) {
      throw new Error(error.message);
    } finally {
      if (connection) connection.release();
    }
  };
  
  module.exports = activationStatusQuery;
  