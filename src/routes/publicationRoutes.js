const express = require('express');
const route = express.Router();


route.post('/publications',);

route.get('/publications',);

route.get('/publications/:place',);

route.get('/publications/:publicationId',);

route.post('/publications/:publicationId/likes',);

route.delete('/publications/:publicationId',);

route.post('/publications/:publicationId/comments',);

module.exports = route;