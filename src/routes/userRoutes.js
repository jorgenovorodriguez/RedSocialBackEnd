const express = require('express');
const route = express.Router();
const authUser = require('../middlewares/authUsers');
const userExists = require('../middlewares/userExists');


const {
  newUser,
  validateCode,
  loginUsers,
  getUser,
  sendRecoverPass,
  editUsersRecoverPass,
  editUsersPass,
} = require('../controllers/users');

//MIDDEWARE USERS
route.post(`/users`, newUser);

route.put('/users/validate/:regCode', validateCode);

route.post('/users/login', loginUsers);

route.get('/users/:userId', getUser);

route.get('/users', authUser, userExists);

route.put('/users/avatar', authUser, userExists);

route.post('/users/password/recover', sendRecoverPass);

route.put('/users/password/recover', editUsersRecoverPass);

route.put('/users/password', authUser, userExists, editUsersPass);

module.exports = route;
