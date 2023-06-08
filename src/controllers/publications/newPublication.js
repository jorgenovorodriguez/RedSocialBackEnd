const insertPublicationQuery = require('../../models/publicationsQuery/insertPublicationQuery');
const savePhoto = require('../../services/savePhoto');

const { generateError } = require('../../services/errors');

const newPublication = async (req, res, next) => {
  try {
    const { title, place, description } = req.body;

    if (!title || !place || !description || !req.files) {
      generateError('Faltan campos', 400);
    }
    const photoFile = await savePhoto(req.files.photoName, 500);

    // Insertamos la entrada y obtenemos los datos de la misma.
    const publication = await insertPublicationQuery(
      title,
      photoFile,
      place,
      description,
      req.user.id
    );

    res.send({
      status: 'ok',
      data: {
        publication,
      },
    });
  } catch (err) {
    next(err);
  }
};

module.exports = newPublication;
