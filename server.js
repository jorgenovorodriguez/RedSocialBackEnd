require('dotenv').config();
const morgan = require('morgan');
const express = require('express');
const colors = require('colors');
const fileUpload = require('express-fileupload');

const { errorStandard, notFound, generateError } = require('./errors');
const newUser = require('./controllers/users/newUser');

const app = express();

app.use(morgan('dev'));

app.use(express.json());

app.use(fileUpload());

app.post(`/users`, newUser);

//******************//
app.use(errorStandard);

app.use(notFound);

app.listen(process.env.PORT, () => {
  console.log(`escuchado en el puerto: ${process.env.PORT}`.bgMagenta);
});
