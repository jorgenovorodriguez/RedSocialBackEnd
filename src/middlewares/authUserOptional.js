const jwt = require('jsonwebtoken');

const { generateError } = require('../services/errors');

const authUserOptional = async (req, res, next) => {
  try {
    // Obtenemos el token de la cabecera de la petición.
    const { authorization } = req.headers;

    // Si hay creamos la propiedad user en el objeto request.
    if (authorization && authorization !== 'null') {
      let userInfo;

      try {
        userInfo = jwt.verify(authorization, process.env.SECRET);
      } catch {
        generateError('Token incorrecto', 401);
      }

      req.user = userInfo;
    }

    // Saltamos a la siguiente función controladora.
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = authUserOptional;
