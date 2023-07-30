const updateUsersRegCodeQuery = require('../../models/usersQuery/updateUsersRegCodeQuery');
const path = require('path');

const validateCode = async (req, res, next) => {
  try {
    const { regCode } = req.params;

    await updateUsersRegCodeQuery(regCode);


    const filePath = path.join(__dirname, '../../public/activation.html');
    res.sendFile(filePath);
  } catch (err) {
    next(err);
  }
};

module.exports = validateCode;