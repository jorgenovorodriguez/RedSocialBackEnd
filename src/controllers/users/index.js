const newUser = require('./newUser');

const getOwnUser = require('./getOwnUser');

const validateCode = require('./validateCode');

const loginUsers = require('./loginUser');

const getUser = require('./getUser');

const sendRecoverPass = require('./sendRecoverPass');

const editUsersRecoverPass = require('./editUsersRecoverPass');

const editUsersPass = require('./editUserPass');

const editUserAvatar = require('./editUserAvatar');

module.exports = {
  newUser,

  validateCode,

  loginUsers,

  getUser,

  sendRecoverPass,

  editUsersRecoverPass,

  editUsersPass,

  getOwnUser,

  editUserAvatar,
};
