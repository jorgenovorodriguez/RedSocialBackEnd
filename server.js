require('dotenv').config();
const morgan = require('morgan');
const express = require('express');
const colors = require('colors');
const fileUpload = require('express-fileupload');

const { errorStandard, notFound } = require('./errors');
const { newUser, validateCode } = require('./controllers/users/index');

const app = express();

app.use(morgan('dev'));

app.use(express.json());

app.use(fileUpload());

//MIDDEWARE USERS
app.post(`/users`, newUser);

app.put('/users/validate/:regCode', validateCode);

app.put('/users/validate/:regCode',);

app.post('/users/login',);

app.get('/users/:userId',);

app.get('/users',);

app.put('/users/avatar',);

app.put('/users/password/recover',);

app.put('/users/password/recover/active',);

app.put('/users/password',);

//MIDDEWARE PUBLICACIONES
app.post('/publications',);

app.get('/publications',);

app.get('/publications/:place',);

app.get('/publications/:publicationId',);

app.post('/publications/:publicationId/likes',);

app.delete('/publications/:publicationId',);

app.post('/publications/:publicationId/comments',);

//******************//
app.use(errorStandard);

app.use(notFound);

app.listen(process.env.PORT, () => {
  console.log(`escuchado en el puerto: ${process.env.PORT}`.bgMagenta);
});
