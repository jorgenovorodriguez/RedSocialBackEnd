const express = require('express');
const route = express.Router();



const { newUser,
    validateCode,
    loginUsers } = require('../controllers/users');



//MIDDEWARE USERS
route.post(`/users`, newUser);

route.put('/users/validate/:regCode', validateCode);

route.post('/users/login', loginUsers);

route.get('/users/:userId',);

route.get('/users',);

route.put('/users/avatar',);

route.put('/users/password/recover',);

route.put('/users/password/recover/active',);

route.put('/users/password',);


module.exports = route;