const newUser = require('./newUser');

const validateCode = require('./validateCode');

const loginUsers = require('./loginUser');

const getUser = require('./getUser');

const sendRecoverPass = require('./sendRecoverPass');

const editUsersRecoverPass = require('./editUsersRecoverPass');

const editUsersPass = require('./editUserPass');

module.exports = {
  newUser,

  validateCode,

  loginUsers,

  getUser,

  sendRecoverPass,

  editUsersRecoverPass,

  editUsersPass,
};
