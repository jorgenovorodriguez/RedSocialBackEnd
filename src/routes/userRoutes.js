const express = require('express');
const route = express.Router();
const authUser = require('../middlewares/authUsers');
const userExists = require('../middlewares/userExists');
const sendRecoverPass = require('../controllers/users/sendRecoverPass');

const {
  newUser,
  validateCode,
  loginUsers,
  getUser,
} = require('../controllers/users');

//MIDDEWARE USERS
route.post(`/users`, newUser);

route.put('/users/validate/:regCode', validateCode);

route.post('/users/login', loginUsers);

route.get('/users/:userId', getUser);

route.get('/users', authUser, userExists);

route.put('/users/avatar', authUser, userExists);

route.put('/users/password/recover', sendRecoverPass);

route.put('/users/password/recover/active');

route.put('/users/password', authUser, userExists);

module.exports = route;
