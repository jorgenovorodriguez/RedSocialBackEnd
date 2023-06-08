const express = require('express');
const route = express.Router();
const authUser = require('../middlewares/authUsers');
const userExists = require('../middlewares/userExists');
const authUserOptional = require('../middlewares/authUserOptional');

const {
  newPublication,

  getListPublication,

  newLike,

  deleteLike,
} = require('../controllers/publications');

//MIDDLEWARES PUBLICATIONS

//Crea una publicación nueva.
route.post('/publications', authUser, userExists, newPublication);

//Retorna un listado de publicaciones con un filtro de keyword.
route.get('/publications', authUserOptional, getListPublication);

//Retorna una publicación en concreto.
route.get('/publications/:publicationId');

//Agrega un like a una publicación.
route.post('/publications/:publicationId/likes', authUser, userExists, newLike);

//Retira un like a una publicación.
route.delete(
  '/publications/:publicationId/likes',
  authUser,
  userExists,
  deleteLike
);

//Eliminar una publicación en concreto.
route.delete('/publications/:publicationId');

//Agrega un comentario a una publicación concreta.
route.post('/publications/:publicationId/comments');

module.exports = route;
